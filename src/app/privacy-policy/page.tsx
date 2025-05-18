import React from "react";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Matiks</title>
      </Head>

      <main className="bg-neutral-900 text-white min-h-screen font-montsemi">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-[#a9f99e] mx-auto mb-4" />
            <p className="text-[#bababa]">Last updated: June 16, 2024</p>
          </header>

          {/* Intro */}
          <section className="mb-12 space-y-4">
            <p className="text-[#bababa]">
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>
            <p className="text-[#bababa]">
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Interpretation & Definitions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Interpretation and Definitions
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Interpretation</h3>
              <p className="text-[#bababa]">
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Definitions</h3>
              <ul className="list-disc list-inside text-[#bababa] space-y-2">
                {[
                  [
                    "Account",
                    "a unique account created for You to access our Service or parts of our Service.",
                  ],
                  [
                    "Affiliate",
                    "an entity that controls, is controlled by or is under common control with a party.",
                  ],
                  [
                    "Company",
                    "refers to Matiks, Matiks, 836, DLF Phase 5, sector 43, Gurgaon.",
                  ],
                  [
                    "Cookies",
                    "small files that are placed on Your device by a website, containing browsing history details.",
                  ],
                  ["Country", "Haryana, India."],
                  [
                    "Device",
                    "any device that can access the Service such as a computer, cellphone, or tablet.",
                  ],
                  [
                    "Personal Data",
                    "any information that relates to an identified or identifiable individual.",
                  ],
                  ["Service", "refers to the Website."],
                  [
                    "Service Provider",
                    "any person who processes data on behalf of the Company.",
                  ],
                  [
                    "Usage Data",
                    "data collected automatically, e.g. page visit durations, IP address.",
                  ],
                  ["Website", "Matiks, accessible from https://www.matiks.in"],
                  ["You", "the individual or entity using the Service."],
                ].map(([term, def]) => (
                  <li key={term}>
                    <strong>{term}</strong> means {def}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Data Collection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Collecting and Using Your Personal Data
            </h2>

            <h3 className="text-xl font-semibold mb-2">
              Types of Data Collected
            </h3>
            <div className="mb-6">
              <h4 className="font-semibold mb-1">Personal Data</h4>
              <p className="text-[#bababa] mb-4">
                While using Our Service, We may ask You to provide personally
                identifiable information, including:
              </p>
              <ul className="list-disc list-inside text-[#bababa] space-y-1">
                {[
                  "Email address",
                  "First name and last name",
                  "Profile Image",
                  "Usage Data",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Usage Data</h4>
              <p className="text-[#bababa]">
                Collected automatically when using the Service ― e.g., IP
                address, browser type, pages visited, date/time, device
                identifiers, and diagnostic data.
              </p>
            </div>
          </section>

          {/* Use of Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Use of Your Personal Data
            </h2>
            <p className="text-[#bababa] mb-4">
              The Company may use Personal Data for the following purposes:
            </p>
            <ul className="list-disc list-inside text-[#bababa] space-y-2">
              {[
                "To provide and maintain our Service, including monitoring usage.",
                "To manage Your Account and grant access to features.",
                "For performance of a contract for products or services You purchase.",
                "To contact You via email, telephone, SMS, or push notifications.",
                "To provide news, special offers, and information about similar goods/services.",
                "To manage Your requests submitted via the Service.",
                "For business transfers (mergers, acquisitions, asset sales).",
                "For data analysis, usage trends, campaign effectiveness, and service improvements.",
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Sharing & Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Sharing & Retention of Your Data
            </h2>

            <h3 className="text-xl font-semibold mb-2">
              We may share Your data with:
            </h3>
            <ul className="list-disc list-inside text-[#bababa] space-y-2 mb-6">
              {[
                "Service Providers for monitoring, analysis, and contact purposes.",
                "Affiliates under common control, subject to this policy.",
                "Business partners for product, service, or promotion offerings.",
                "Other users when You share information in public areas.",
                "With Your consent for any other purpose.",
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2">Retention</h3>
            <p className="text-[#bababa]">
              We retain Personal Data as long as necessary to fulfill this
              policy’s purposes, comply with legal obligations, resolve
              disputes, and enforce agreements. Usage Data is generally retained
              for shorter periods unless needed for security or legal
              requirements.
            </p>
          </section>

          {/* Transfers & Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Transfer, Deletion & Disclosure
            </h2>
            <ul className="list-disc list-inside text-[#bababa] space-y-4">
              <li>
                <strong>Transfer:</strong> Your data may be processed outside
                your jurisdiction; we take steps to ensure security and legal
                compliance.
              </li>
              <li>
                <strong>Deletion:</strong> You may request deletion of Your
                Personal Data via account settings or by contacting us.
              </li>
              <li>
                <strong>Disclosure:</strong> We may disclose data for business
                transactions, legal requirements, law enforcement, or other
                legitimate purposes (e.g., to protect rights or public safety).
              </li>
            </ul>
          </section>

          {/* Security, Children, Changes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Other Important Information
            </h2>

            <h3 className="text-xl font-semibold mb-2">Security</h3>
            <p className="text-[#bababa] mb-4">
              We strive to protect Your data, but no internet transmission or
              storage is 100% secure.
            </p>

            <h3 className="text-xl font-semibold mb-2">Children’s Privacy</h3>
            <p className="text-[#bababa] mb-4">
              Our Service does not address anyone under 13. If You learn we’ve
              collected data from a child under 13 without parental consent,
              please contact us.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Links to Other Websites
            </h3>
            <p className="text-[#bababa] mb-4">
              We are not responsible for third-party sites’ content or policies.
              Please review their privacy policies directly.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Changes to This Policy
            </h3>
            <p className="text-[#bababa]">
              We may update this Privacy Policy; we’ll notify You via email or
              on the Service and update the “Last updated” date.
            </p>
          </section>

          {/* Contact */}
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-[#bababa]">
              If you have any questions, email us at{" "}
              <a
                href="mailto:info@matiks.com"
                className="text-[#a9f99e] hover:underline"
              >
                info@matiks.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
