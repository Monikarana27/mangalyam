# Apply this update to your existing project

1. Make a local Git checkpoint of any work not yet committed.
2. Extract `mangalyam-update.zip` outside your project.
3. Copy the extracted files and folders into `C:\Users\monik\mangalyam`, merging folders and replacing matching files. Do not delete your project or its `.git` folder.
4. Run `npm run lint`, `npm run build`, then `npm run dev`.
5. Review all seven navigation pages and check at 375px width. Test venue filters, details, package links, article links and the contact brief.
6. Add your stable Vercel production domain to README.md. Refresh screenshots after reviewing.
7. Review `git diff`, then commit and push when ready. Your connected Vercel project will redeploy from the push.

The update contains only changed/new source, documentation, index.html and three image assets. It does not replace package.json, the lockfile, original image assets, screenshots or Git history. No dependency changes are required.
