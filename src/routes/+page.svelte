<script lang="ts">
  // prerender enables static generation for this page
  export const prerender = true;
</script>

<svelte:head>
  <title>Bari Scooter Rentals | Electric Scooter Rental in Bari, Italy</title>
  <meta name="description" content="Rent reliable electric scooters in Bari. Best prices, free helmet, and 24/7 support. Book online and explore Bari like a local." />
  <meta name="keywords" content="Bari scooter rental, electric scooter Bari, scooter hire Bari, Italy scooter rentals, Bari mobility" />
  <link rel="canonical" href="https://Bariscooter.com/" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://Bariscooter.com/" />
  <meta property="og:title" content="Bari Scooter Rentals | Explore Bari on Two Wheels" />
  <meta property="og:description" content="Rent electric scooters in Bari, Italy. Affordable rates, free helmet &amp; lock, and roadside assistance." />
  <meta property="og:image" content="https://Bariscooter.com/og-image.jpg" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://Bariscooter.com/" />
  <meta name="twitter:title" content="Bari Scooter Rentals | Explore Bari on Two Wheels" />
  <meta name="twitter:description" content="Rent electric scooters in Bari and discover the city at your own pace." />
  <meta name="twitter:image" content="https://Bariscooter.com/og-image.jpg" />

  <!-- Structured Data -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      "name": "Bari Scooter Rentals",
      "url": "https://Bariscooter.com/",
      "description": "Affordable electric scooter rentals in Bari, Italy.",
      "telephone": "+351912345678",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ribeira, Bari",
        "addressLocality": "Bari",
        "addressCountry": "IT"
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }]
    }
  </script>
</svelte:head>

<main class="container">
  
  <h1>Bari Scooter Rentals</h1>
  <p>Discover the beautiful city of Bari and the stunning Puglia region at your own pace with our fleet of modern electric scooters.</p>

  <section>
    <h2>Why Ride With Us?</h2>
    <ul>
      <li>Eco-friendly electric scooters with up to 50 km range</li>
      <li>Competitive hourly and daily rates</li>
      <li>Free helmet and lock included</li>
      <li>24/7 roadside assistance throughout Bari</li>
      <li>Perfect for exploring Bari Vecchia (Old Town) and the waterfront</li>
    </ul>
  </section>

  <section>
    <h2>Explore Bari's Best Attractions</h2>
    <ul>
      <li><strong>Basilica di San Nicola</strong> - Historic pilgrimage site in Bari Vecchia</li>
      <li><strong>Castello Normanno-Svevo</strong> - Medieval castle overlooking the Adriatic</li>
      <li><strong>Teatro Petruzzelli</strong> - One of Italy's most important opera houses</li>
      <li><strong>Lungomare Nazario Sauro</strong> - Beautiful seafront promenade</li>
      <li><strong>Via del Corso & Via Sparano</strong> - Main shopping streets</li>
      <li><strong>Pane e Pomodoro Beach</strong> - Popular city beach</li>
    </ul>
  </section>
    
     

  <section>
    <h2>Pricing</h2>
    <table>
      <thead>
        <tr><th>Duration</th><th>Price</th></tr>
      </thead>
      <tbody>
        <tr><td>1 hour</td><td>€10</td></tr>
        <tr><td>3 hours</td><td>€25</td></tr>
        <tr><td>Full day (9 h)</td><td>€45</td></tr>
      </tbody>
    </table>
  </section>

  <section>
    <h2>How It Works</h2>
    <ol>
      <li>Book online or at our store near Ribeira.</li>
      <li>Pick up your scooter and gear.</li>
      <li>Enjoy the ride and return before 20:00.</li>
    </ol>
  </section>

  <section>
    <h2>Contact &amp; Booking</h2>
    <p>Email: <a href="mailto:hello@bariscooter.com">hello@bariscooter.com</a><br />
    
    
  </section>
</main>

<style>
  .container {
    max-width: 760px;
    margin: 0 auto;
    padding: 2rem 1rem;
    font-family: system-ui, sans-serif;
    line-height: 1.6;
  }
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    color: #0070f3;
  }
  h2 {
    margin-top: 2rem;
    font-size: 1.6rem;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0.5rem;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 0.5rem;
    text-align: left;
  }
  .book-button {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background: #0070f3;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
  }
  .book-button:hover {
    background: #0059c1;
  }
</style>
