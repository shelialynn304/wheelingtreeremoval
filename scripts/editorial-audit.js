#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const rootDir = process.cwd();
const requiredFormSnippet = '<form id="quote-form" action="https://formsubmit.co/info@wheelingtreeremoval.com" method="POST">';
const forbiddenClaims = [
  'licensed',
  'insured',
  'certified',
  'arborist-reviewed',
  'family-owned',
  'locally owned',
  'years of experience',
  'number one',
  'best tree service',
  'five-star rated',
  'guaranteed lowest price'
];

const errors = [];

function getChangedHtmlFiles() {
  const baseRef = process.env.GITHUB_BASE_REF;

  try {
    let command = 'git show --name-only --pretty="" --diff-filter=ACMRT HEAD';
    if (baseRef) {
      command = `git diff --name-only --diff-filter=ACMRT origin/${baseRef}...HEAD`;
    }

    const output = execSync(command, { cwd: rootDir, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
    return output
      .split('\n')
      .map((file) => file.trim())
      .filter((file) => file.endsWith('.html'))
      .filter((file) => fs.existsSync(path.join(rootDir, file)));
  } catch {
    return [];
  }
}

function validateFile(relPath) {
  const filePath = path.join(rootDir, relPath);
  const content = fs.readFileSync(filePath, 'utf8');
  const lower = content.toLowerCase();

  if (!/<h1\b[^>]*>/i.test(content)) {
    errors.push(`${relPath}: missing <h1>.`);
  }

  if (!/href=["']tel:/i.test(content)) {
    errors.push(`${relPath}: missing working phone link (tel:).`);
  }

  const hasQuoteId = /id=["']quote["']/i.test(content);
  const hasQuoteLink = /href=["'][^"']*#quote[^"']*["']/i.test(content) || /quote request/i.test(content);
  if (!hasQuoteId && !hasQuoteLink) {
    errors.push(`${relPath}: missing quote form with id="quote" or clear quote CTA/link.`);
  }

  if (content.includes('id="quote-form"') && !content.includes(requiredFormSnippet)) {
    errors.push(`${relPath}: quote form does not preserve required action/method snippet.`);
  }

  for (const claim of forbiddenClaims) {
    if (lower.includes(claim)) {
      errors.push(`${relPath}: includes potentially unverified trust claim: "${claim}".`);
    }
  }
}

const htmlFiles = getChangedHtmlFiles();

if (htmlFiles.length === 0) {
  console.log('No changed HTML files detected. Editorial audit passed.');
  process.exit(0);
}

htmlFiles.forEach(validateFile);

if (errors.length > 0) {
  console.error('Editorial audit failed:\n');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Editorial audit passed for ${htmlFiles.length} changed HTML file(s).`);
