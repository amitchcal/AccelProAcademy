# AccelPro Academy website brief

## Goal and audience
The site helps working professionals understand AccelPro Academy's programmes and make a confident first enquiry or book a discovery call. The primary audience is Indian professionals and team leaders seeking practical career or leadership development.

## Assumptions to confirm
- Exact course names, durations, formats, fees, and outcomes (the course image was not included with the supplied brief).
- Founder/faculty name, biography, credentials, and portrait.
- City, service area, email, phone/WhatsApp, and booking availability.
- Legal entity, privacy contact, and production domain.
- Whether programmes are cohort-based, corporate, individual, or a mix.

## Information architecture
- Home: positioning, outcomes, featured programmes, process, FAQ, enquiry CTA.
- Programmes: searchable catalogue and individual programme summaries.
- About: academy approach, principles, and faculty placeholders.
- Contact: enquiry form, booking request, and contact detail placeholders.
- Privacy: data-use summary for submitted forms.
- 404: recovery links to the catalogue and contact page.

## Navigation and user journey
Primary navigation: Home, Programmes, About, Contact. A persistent “Book a conversation” button leads to the booking section. The mobile menu uses the same order and remains keyboard accessible.

Visitor lands on Home → understands who the academy serves → reviews relevant programmes → opens Contact or booking → submits validated details → receives a confirmed server response. Secondary journeys support programme search and newsletter signup.

## Technical approach
Vinext/React with TypeScript and reusable components, built for Cloudflare Workers through Sites. D1 stores contact enquiries, booking requests, and newsletter subscriptions. Calendar confirmation and outbound email can be added later once provider credentials and real availability rules are supplied.

## Design direction and tokens
“Quiet authority”: editorial typography, decisive black and maroon surfaces, warm gold accents, white breathing room, restrained motion, and one original hero photograph featuring Indian professionals.

- Ink `#120F0F`; Maroon `#5C0B1E`; Deep maroon `#330610`; Gold `#C79A3B`; Pale gold `#F2E6C9`; Paper `#FBFAF7`; White `#FFFFFF`.
- Display: Georgia/serif fallback. Body: Inter/system sans fallback.
- Spacing: 4, 8, 12, 16, 24, 32, 48, 72, 96px.
- Radius: 4px controls, 12px panels, pill only for labels.
- Focus: 3px gold outline with 3px offset.
