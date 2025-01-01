This error occurs when using the Expo SDK's `Image` component with a local URI that's not correctly formatted.  The URI should begin with `file://` and should include the full absolute path to the image file.  Common mistakes include omitting the `file://` prefix, using a relative path, or typos in the path.