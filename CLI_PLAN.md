CX Component CLI Development Plan (Revised: Git Source)

The goal is to create a simple CLI tool that manages component downloads directly from a public Git repository's raw content, eliminating the need for a custom API endpoint or a configurable baseUrl.

I. System Architecture Overview

The system will now consist of three main parts:

The CLI Tool (Your Tool): Installed locally, runs commands, reads config, fetches code from the hardcoded Git URL, and writes files.

The Configuration (cx.json): Defines where to put the files and how to handle imports.

The Component Source (Public Git Repository): The fixed, hardcoded source where raw component file contents are hosted.

II. Configuration File Specification (cx.json)

The configuration file is simplified as it no longer needs to track the component source location.

Location: ./cx.json (at the root of the user's project).

Purpose: Stores settings necessary for the CLI to place components and correctly resolve local imports.

cx.json Structure

Property Name

Type

Description

directory

string

The path relative to the project root where components should be saved. E.g., "src/components/ui".

alias

string

The path alias used in the user's project's import system (e.g., tsconfig.json or module resolver) that points to the directory. E.g., "@/components/ui".

Example cx.json

{
"directory": "src/ui-components",
"alias": "@ui"
}

III. CLI Logic and Commands

We will now use your specific GitHub raw content path: https://raw.githubusercontent.com/SinghAstra/ComponentX/main/www/components/component-x/.

1. Hardcoded Component Source URL (Updated)

The CLI will internally define the base URL for fetching raw file content.

// Internal CLI variable (hardcoded)
const COMPONENT_SOURCE_BASE = "[https://raw.githubusercontent.com/SinghAstra/ComponentX/main/www/components/component-x/](https://raw.githubusercontent.com/SinghAstra/ComponentX/main/www/components/component-x/)";

2. cx init (Initialization)

This command sets up the local project environment.

Process:

Check if cx.json already exists. If yes, confirm with the user before overwriting.

Prompt the user only for the two required properties:

directory (Where to put the components? e.g., src/components/ui)

alias (What import alias to use? e.g., @/components/ui)

Write the resulting JSON structure to a new ./cx.json file.

3. cx add <component-name> (Component Download)

This is the core functionality.

Process:

Check Config: Ensure ./cx.json exists and is valid. If not, suggest running cx init.

Determine Target Path: Read directory from cx.json.

Construct Fetch URL (Using hardcoded source):

Full URL example for a component named button: https://raw.githubusercontent.com/SinghAstra/ComponentX/main/www/components/component-x/button.tsx

The full URL is constructed as: COMPONENT_SOURCE_BASE + <component-name> + '.tsx'

Fetch Component Data: Make a GET request to the constructed raw file URL.

Expected Response: The response is the raw component file content (as text).

Write Component File:

Read the content from the API response.

Write the content to the target directory: <cx.json.directory>/<component-name>.tsx

Rewrite Imports (Crucial Step): The fetched code will contain imports using the library's internal alias (e.g., @lib/utils). The CLI must replace the source alias with the user's alias (cx.json.alias).

Example: The CLI must replace import { cn } from '@lib/utils' with import { cn } from '@ui/utils'.

You will need a hardcoded source alias in your CLI (e.g., @lib) and replace it with the user's configurable alias (e.g., @ui).

IV. Source Component Structure

Since we are fetching directly from Git, your component source files (e.g., button.tsx, dialog.tsx, utils.ts) must exist directly under the path defined by COMPONENT_SOURCE_BASE.
