# Contributing Guide

Thanks for taking part in the Git & GitHub Workshop! Follow these steps to add your testimonial and submit it as a pull request.

## 1. Star & Fork the Repository

Click the **⭐Star** button & **Fork** button at the top-right of the repository page to create your own copy of the project under your GitHub account.

## 2. Clone Your Fork

Clone your forked repository to your local machine:

```bash
git clone https://github.com/<your-github-username>/prash-coder-workshops.git
cd prash-coder-workshops
```

## 3. Create a New Branch

Never work directly on `main`. Create a new branch for your change:

```bash
git switch -c add-testimonial-<your-name>
```

Example:

```bash
git checkout -b add-testimonial-prashant
```

## 4. Install Dependencies (Optional)

If you want to run the project locally to preview your changes:

```bash
npm install
npm run dev
```

## 5. Add Your Testimonial

Open `data/testimonials.ts` and add your testimonial object to the existing array.

**Do not modify any other file, and do not change existing testimonials.** Only append your entry.

Example format:

```typescript
{
  id: 1,
  name: "Prashant Gupta",
  role: "Student",
  rating: 5,
  liked: "Deploying the static content to pages and its workflow",
  improvements: "Be more repetitive about the tasks",
  feedback:
    "I really liked learning how to deploy static content to pages and understanding the workflow behind it. The instructor taught everything from scratch at a good pace while practicing alongside us and making sure everyone understood.",
  submittedBy: "Prashant Gupta",
},
```

**Notes:**
- Use a unique `id` — check the last entry in the file and increment by 1.
- Keep `rating` between 1 and 5.
- Fill in `liked`, `improvements`, and `feedback` with your own honest workshop experience.
- Set `submittedBy` to your own name.

## 6. Commit Your Changes

Stage and commit your change with a clear message:

```bash
git add data/testimonials.ts
git commit -m "Add testimonial from <your-name>"
```

## 7. Push to Your Fork

Push your branch to your forked repository:

```bash
git push origin add-testimonial-<your-name>
```

## 8. Open a Pull Request

1. Go to your fork on GitHub.
2. Click **Compare & pull request** for the branch you just pushed.
3. Make sure the PR is targeting the original repository's `main` branch.
4. Give your PR a clear title, e.g. `Add testimonial from Prashant Gupta`.
5. Submit the pull request.

## 9. Wait for Review

Your PR will be reviewed and merged once approved. If changes are requested, update your branch and push again - the PR will update automatically.

## Git Workflow Summary

```text
Fork → Clone → Branch → Edit → Commit → Push → Pull Request
```

Happy building!