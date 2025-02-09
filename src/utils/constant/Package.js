import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export const PackageData = [
  {
    badge: "Very Good",
    title: "Basic",
    price: 29,
    SubTitle: "per user, per month",
    features: [
      { icon: faCheckCircle, text: "99.5% Uptime Guarantee" },
      { icon: faCheckCircle, text: "120GB CDN Bandwidth" },
      { icon: faCheckCircle, text: "5GB Cloud Storage" },
      { icon: faTimesCircle, text: "Personal Help Support" },
      { icon: faTimesCircle, text: "Enterprise SLA" },
    ],
    btn: "Start Basic",
  },
  {
    badge: "Best Value",
    title: "Standard",
    price: 49,
    SubTitle: "per user, per month",
    features: [
      { icon: faCheckCircle, text: "99.5% Uptime Guarantee" },
      { icon: faCheckCircle, text: "150GB CDN Bandwidth" },
      { icon: faCheckCircle, text: "10GB Cloud Storage" },
      { icon: faCheckCircle, text: "Personal Help Support" },
      { icon: faTimesCircle, text: "Enterprise SLA" },
    ],
    btn: "Start Standard",
  },
  {
    badge: "Very Premium",
    title: "Premium",
    price: 79,
    SubTitle: "2 users, per month",
    features: [
      { icon: faCheckCircle, text: "100% Uptime Guarantee" },
      { icon: faCheckCircle, text: "200GB CDN Bandwidth" },
      { icon: faCheckCircle, text: "20GB Cloud Storage" },
      { icon: faCheckCircle, text: "Personal Help Support" },
      { icon: faCheckCircle, text: "Enterprise SLA" },
    ],
    btn: "Start Premium",
  },
];
