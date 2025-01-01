# Expo Image Component - Incorrect Local URI

This repository demonstrates a common error encountered when using the Expo Image component with local URIs and provides a solution.

## Problem
The `Image` component from Expo fails to display a local image if the URI is not properly formatted.

## Solution
The solution involves verifying that the URI starts with `file://` and provides the absolute file path.  Relative paths will usually not work.