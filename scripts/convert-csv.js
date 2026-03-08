// Helper script to convert CSV data to the Werd interface format
// Run this with: node scripts/convert-csv.js

import fs from 'fs';
import path from 'path';

// Read your CSV file
const csvPath = path.join(process.cwd(), 'werds.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');

// Parse CSV (simple approach)
const lines = csvContent.split('\n');
const headers = lines[0].split(',');
const werds = [];

for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  
  const values = line.split(',');
  if (values.length < headers.length) continue;
  
  const werd = {
    werd_id: values[0],
    werd: values[1],
    pronunciation: values[2] || undefined,
    part_of_speech: values[4] || undefined,
    definition: values[5] || undefined,
    tags: values[2] || undefined, // You may need to adjust this based on your CSV structure
    is_curated: values[6] === 'checked' || false
  };
  
  werds.push(werd);
}

// Generate the TypeScript code
const tsCode = `import type { Werd } from "../types";

// Parse your CSV data into the Werd interface
export const werdsData: Werd[] = [
${werds.map(w => `  {
    werd_id: "${w.werd_id}",
    werd: "${w.werd}",
    pronunciation: "${w.pronunciation || ''}",
    part_of_speech: "${w.part_of_speech || ''}",
    definition: "${w.definition || ''}",
    tags: "${w.tags || ''}",
    is_curated: ${w.is_curated}
  }`).join(',\n')}
];

// Simple functions to get data (mimicking Supabase queries)
export async function getAllWerds(): Promise<Werd[]> {
  // Simulate network delay for realistic behavior
  await new Promise((resolve) => setTimeout(resolve, 100));
  return werdsData;
}

export async function getWerdsByTag(tag: string): Promise<Werd[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return werdsData.filter(werd => werd.tags?.includes(tag) || false);
}

export async function getWerdById(id: string): Promise<Werd | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return werdsData.find((werd) => werd.werd_id === id) || null;
}

export async function searchWerds(query: string): Promise<Werd[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const lowercaseQuery = query.toLowerCase();
  return werdsData.filter(werd => 
    werd.werd.toLowerCase().includes(lowercaseQuery) ||
    werd.definition?.toLowerCase().includes(lowercaseQuery) ||
    werd.tags?.toLowerCase().includes(lowercaseQuery) ||
    false
  );
}

// Get all available tags
export function getAllTags(): string[] {
  const allTags = werdsData
    .filter(werd => werd.tags)
    .flatMap(werd => werd.tags!.split(','));
  return [...new Set(allTags)].sort();
}

// Get curated picks (words marked as curated)
export async function getCuratedPicks(): Promise<Werd[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return werdsData.filter(werd => werd.is_curated);
}

// Get word of the day (random selection)
export async function getWordOfTheDay(): Promise<Werd> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const randomIndex = Math.floor(Math.random() * werdsData.length);
  return werdsData[randomIndex];
}
`;

// Write to the data file
const outputPath = path.join(process.cwd(), 'src', 'data', 'werds.ts');
fs.writeFileSync(outputPath, tsCode);

console.log(`Generated ${werds.length} words and saved to ${outputPath}`);
console.log('You can now run your app with: npm run dev');
