Act as an expert frontend developer. Build a modern, highly responsive single-page static web application for an all-in-one Event Management business (handling food, grocery, traditional cooks, and decoration). 

Use standard HTML5, Tailwind CSS (via CDN), and vanilla JavaScript. Do not use external database libraries. All state must be handled in memory.

### Core Features to Build:

1. HERO SECTION & VALUE PROP
- High-impact header: "We Handle Everything—Groceries, Cooks, & Decor. You Just Enjoy."
- A prominent "Estimate Your Event Cost" call-to-action button that scrolls down to the calculator.

2. INTERACTIVE EVENT COST ESTIMATOR (THE CORE FEATURE)
Create an interactive calculator form. When users change inputs, update an "Estimated Total Cost" display live on the page.
Inputs needed:
- Event Type (Dropdown: Marriage, Naming Ceremony, Housewarming, Birthday Party)
- Guest Count (Number input or slider from 50 to 2000)
- Catering Style (Dropdown: Standard Veg, Premium Veg, Traditional Kodava Non-Veg Special)
- Decoration Tier (Dropdown: Basic Traditional, Elegant Floral, Grand Royal Palace)
- Extra Add-ons (Checkboxes: Professional Photography, Sound System & DJ, Traditional Dancers)

*Math Logic for Claude to code:* 
Assign a base per-plate cost for catering styles (e.g., Veg=300, Non-Veg=500) and multiply by Guest Count. Add flat rates for Decoration Tiers and Add-ons to show a realistic dynamic total.

3. DYNAMIC SUMMARY & WHATSAPP CHECKOUT BUTTON
Below the calculator, show a clean "Your Event Summary" box summarizing all selected choices and the total price.
- Add a "Book & Send Details via WhatsApp" button.
- JavaScript Logic: When clicked, read all form values, format them into a clean, readable text summary with emojis, encode it, and open a window to: https://wa.me/YOUR_PHONE_NUMBER?text=YOUR_ENCODED_STRING

4. SERVICES DISPLAY GRID
Show 4 simple cards detailing what we bring to the table:
- "Full-Scale Catering & Specialized Cooks" (Handling everything from traditional regional dishes to international buffets)
- "Wholesale Grocery Management" (We buy, transport, and manage inventory—zero wastage for you)
- "Theme & Floral Decoration" (Stage, entrance, and seating decor tailored to the event)
- "Complete On-Site Supervision" (An event manager on the ground so you don't have to stress)

5. FLOATING WHATSAPP CHAT BUTTON
A floating green WhatsApp icon in the bottom right corner of the screen for general inquiries that opens a direct chat with the message: "Hi, I have a quick question about your event management services."

### Design Guidelines:
- Clean, premium, traditional-yet-modern aesthetic (use warm colors like emerald greens, deep ambers, and clean whites).
- Fully mobile-responsive (crucial since most clients browse on phones).
- Clean, semantic code with comments explaining the WhatsApp text formatting logic.