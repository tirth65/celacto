## SelectoPharma – React + Tailwind Landing Site

This is a fully responsive, single-page marketing site for a pharmaceutical access partner, built with **React**, **Vite**, and **Tailwind CSS**. It includes:

- **Hero section with background video** and rotating multilingual greetings/quotes
- **Sticky navbar** with logo on the left and `About Us`, `Services`, `Contact Us` links that smooth‑scroll to sections
- **About**, **Services**, and **Contact** sections with pharma-style visuals
- **Contact form** that can submit into **Google Sheets** + send email via **Google Apps Script**

### 1. Install and run locally

From the `selactopharma` folder:

```bash
npm install
npm run dev
```

Then open the printed `http://localhost:5173` URL in your browser.

### 2. Configure Tailwind (already wired)

Tailwind is configured via:

- `tailwind.config.cjs`
- `postcss.config.cjs`
- `src/index.css`

You can customize colors, fonts, and spacing in `tailwind.config.cjs`.

### 3. Hooking the contact form to Google Sheets

1. **Create a Sheet**
   - Go to Google Sheets and create a new spreadsheet (for example, `SelectoPharma Contacts`).
   - Name the columns in row 1: `timestamp`, `name`, `email`, `company`, `message`.

2. **Create a Google Apps Script**
   - In the Sheet, go to **Extensions → App Script**.
   - Replace the default code with:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.email || "",
    data.company || "",
    data.message || ""
  ]);

  // Optional: send notification email
  var subject = "New SelectoPharma contact form submission";
  var body =
    "Name: " + data.name + "\n" +
    "Email: " + data.email + "\n" +
    "Company: " + (data.company || "") + "\n\n" +
    "Message:\n" + data.message;
  MailApp.sendEmail("contact@selectopharma.com", subject, body);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. **Deploy the script as a web app**
   - Click **Deploy → New deployment**.
   - Choose **Web app** and set:
     - **Execute as**: Me (your account)
     - **Who has access**: Anyone with the link
   - Click **Deploy** and copy the **Web app URL**.

4. **Paste the URL into the React app**
   - Open `src/components/Contact.jsx`.
   - Replace `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec` with your copied Web app URL.

Now form submissions will be stored in Google Sheets and emailed to the company inbox.

### 4. Deploying (Netlify / Vercel)

Because this is a Vite app, deployment is straightforward:

- **Netlify**
  - Connect your Git repository.
  - Build command: `npm run build`
  - Publish directory: `dist`

- **Vercel**
  - Import the project from Git.
  - Framework preset: `Vite`
  - Build command: `npm run build`
  - Output directory: `dist`

After deployment, you can share the live URL with your client.


