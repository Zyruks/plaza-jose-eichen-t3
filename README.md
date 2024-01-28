# Plaza Jose Eichen Website Project

## Overview

This repository contains the codebase for the Plaza Jose Eichen website, an interactive and user-friendly platform showcasing a vibrant shopping and community hub in Sosúa, Dominican Republic. Built with the T3 Stack, the website features an intuitive directory for locating shops and services, detailed information on each business, upcoming events, and amenities.

## Figma Design

Explore our UI/UX design prototypes in Figma: [Plaza Jose Eichen Figma Design](https://www.figma.com/file/sy2hmDX0CVknYrGVV5RoMQ/Plaza-Jose-Eichen?type=design&node-id=0%3A1&mode=design&t=bTl8sEOOG5KzIpIS-1).

## Technology Stack

- **Frontend:** Next.js (React framework)
- **Styling:** Tailwind CSS
- **Database ORM:** Prisma
- **Backend Querying:** tRPC

## Database Configuration

- **Local Development:** We use a local database setup for development purposes. This setup is facilitated through Docker.
- **Production Environment:** In production, we utilize Supabase for our database storage. This provides a scalable, cloud-hosted database solution that ensures robust performance and reliability for the live website.

## Setup and Installation

To set up and run the project locally:

1. Clone the repository: `git clone https://github.com/zyruks/plaza-jose-eichen-t3.git`
2. Install dependencies: `pnpm install`
3. Ensure Docker is running on your system.
4. Start the local database: `./start-database.sh`
5. Apply database migrations: `pnpm db:push`
6. Start the development server: `pnpm run dev`

After completing these steps, visit `http://localhost:3000` to view the application.

## Contributing

We welcome contributions! Please read our contributing guidelines for information on how to report issues, submit feature requests, and send pull requests.

## License

This project is open source and available under the [MIT](./LICENSE.MD).
