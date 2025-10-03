# Google Sheets Integration Setup

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new sheet
2. Set the following headers in the first row (A1 to G1):

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| Date | Name | Email | Phone | Company | Service | Message |

## Step 2: Create Google Apps Script

1. In your Google Sheet, click on `Extensions -> Apps Script`
2. This will open the Google Script Editor
3. Rename the project to "Marval Contact Form"
4. Replace the default `myFunction()` code with the code from `google-apps-script.js`
5. Save the project

## Step 3: Run Initial Setup

1. In the Apps Script editor, select the `initialSetup` function from the dropdown
2. Click the "Run" button
3. You'll be asked for permissions - click "Review permissions"
4. Click "Go to Marval Contact Form (Unsafe)" to grant permissions
5. The function should run successfully

## Step 4: Deploy as Web App

1. Click the "Deploy" button and select "New deployment"
2. Click the "Select type" icon and choose "Web app"
3. Configure the deployment:
   - Description: "Marval Contact Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click "Deploy"
5. **IMPORTANT**: Copy the Web App URL - you'll need this for the website

## Step 5: Update Website

Replace the placeholder URL in the React app with your actual Web App URL:

1. Open `src/App.jsx`
2. Find the `handleSubmit` function
3. Replace the form submission logic with a POST request to your Web App URL

## Form Field Mapping

The form fields will map to Google Sheets columns as follows:
- `name` → Name (Column B)
- `email` → Email (Column C)  
- `phone` → Phone (Column D)
- `company` → Company (Column E)
- `service` → Service (Column F)
- `message` → Message (Column G)
- Date will be automatically added (Column A)

## Testing

After setup, test the form submission to ensure data appears in your Google Sheet.
