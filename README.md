<p align="center">
  <img src="https://pub-ac805a7c7b0849ca8cf86ae70f240bda.r2.dev/our-internal-files-erpli/marketing/logo.png" alt="Erpli Logo" width="120">
</p>

<h1 align="center">Erpli Student Panel</h1>

<p align="center">
  <strong>Production-ready Student Panel for simple and reliable deployment.</strong>
</p>

<p align="center">
  Download the pre-built files and upload them to your hosting provider,<br>
  or connect this repository directly to your domain.
</p>

---

## Overview

**Erpli Student Panel** is provided as a ready-to-deploy production build.

If your goal is to deploy the Student Panel, there is no need to install dependencies, configure a development environment, or rebuild the application.

The final production distribution is located at:

```text
public/dist
```

This directory contains the compiled files required to run the **Erpli Student Panel** in a production hosting environment.

---

## Quick Deployment

### Option 1 — Download & Upload

For a standard hosting setup:

1. Download or clone this repository.
2. Open the `public/dist` directory.
3. Upload the **contents of `public/dist`** to your hosting provider.
4. Place the files inside the directory served by your domain or subdomain.
5. Point your domain/subdomain to the hosting environment.
6. Open the Student Panel URL and verify that everything loads correctly.

Depending on your hosting provider, the public web directory may be named:

```text
public_html/
www/
htdocs/
```

> **Important:** Upload the files inside `public/dist`, not the entire repository, unless your hosting environment is specifically configured to use `public/dist` as its document root.

---

## Repository-Based Deployment

If your hosting platform supports deployments directly from a Git repository, you can connect this public repository instead of manually downloading and uploading the production files.

Configure your hosting provider to use:

```text
public/dist
```

as the application's:

* Publish directory
* Output directory
* Deployment directory
* Document root

The exact setting name may vary depending on your hosting provider.

Using repository-based deployment can make future updates easier, as new versions can be deployed through your normal Git workflow.

---

## Directory Structure

The production files are located inside the following directory:

```text
repository/
└── public/
    └── dist/
        ├── index.html
        ├── assets/
        └── ...
```

The `public/dist` directory should be treated as the final production distribution of the **Erpli Student Panel**.

---

## Domain & Subdomain Setup

The Student Panel can be hosted on a dedicated domain or subdomain based on your infrastructure.

For example:

```text
students.example.com
panel.example.com
example.com/student
```

Configure your domain or subdomain through your hosting provider and make sure it serves the contents of:

```text
public/dist
```

Your exact domain configuration may vary depending on your hosting environment.

---

## Before Going Live

After deployment, verify the following:

* The domain or subdomain points to the correct hosting environment.
* `index.html` is served correctly.
* Static assets load without errors.
* HTTPS/SSL is enabled.
* The Student Panel can communicate with the required backend/API services.
* Authentication and login flows work correctly.
* Browser routing works correctly after refreshing internal pages.

---

## Important

> **`public/dist` contains the ready-to-deploy production version of the Erpli Student Panel.**
>
> For a standard deployment, you do not need to rebuild the application. Download and upload the distribution files, or configure your hosting platform to serve `public/dist` directly.

---

<p align="center">
  <img src="https://pub-ac805a7c7b0849ca8cf86ae70f240bda.r2.dev/our-internal-files-erpli/marketing/logo.png" alt="Erpli" width="60">
</p>

<p align="center">
  <strong>Erpli Student Panel</strong><br>
  Ready to deploy. Simple to host.
</p>
