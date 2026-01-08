---
description: Push the application code to GitHub
---

Follow these steps to push your code to a GitHub repository.

1.  **Create a Repository on GitHub**
    *   Go to [GitHub.com](https://github.com/new).
    *   Enter a name for your repository.
    *   Do **not** initialize with README, .gitignore, or license (you already have them locally).
    *   Click **Create repository**.

2.  **Initialize Git (if not already done)**
    Check if you are already in a git repo:
    ```bash
    git status
    ```
    If not initialized:
    ```bash
    git init
    ```

3.  **Add Remote Origin**
    Copy the URL of your new GitHub repository (e.g., `https://github.com/username/repo-name.git`).
    
    Add it as the 'origin' (replace URL with your actual repo URL):
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    ```
    
    *If 'origin' already exists but is wrong:*
    ```bash
    git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    ```

4.  **Stage and Commit Changes**
    ```bash
    git add .
    git commit -m "Initial commit"
    ```

5.  **Rename Branch (Optional but recommended)**
    Ensure your main branch is called `main`:
    ```bash
    git branch -M main
    ```

6.  **Push to GitHub**
    ```bash
    git push -u origin main
    ```
