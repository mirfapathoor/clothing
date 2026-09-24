// Boutique Studio - Independent Clothing Startup Dataset
// Monochromatic Brown + White ERP System with Startup-friendly INR (₹) Pricing

window.ATELIER_DATA = {
  atelierInfo: {
    name: "MIFKA",
    tagline: "Clothing Boutique & Custom Tailoring",
    season: "Spring / Festive 2026",
    currency: "INR (₹)",
    currencySymbol: "₹",
    headCouturier: "Mifka Studio Team",
    location: "Mifka Clothing Studio & Workshop"
  },

  kpiStats: [
    {
      id: "active-orders",
      title: "Active Orders",
      value: "18 Garments",
      change: "4 ready for pickup/dispatch",
      subtext: "Avg. turnaround 6 days",
      icon: "layers"
    },
    {
      id: "atelier-capacity",
      title: "In Stitching",
      value: "8 Pieces",
      change: "75% workshop capacity",
      subtext: "Tailors currently active",
      icon: "scissors"
    },
    {
      id: "ready-dispatch",
      title: "Ready for Pickup / Dispatch",
      value: "6 Outfits",
      change: "Customer trials scheduled",
      subtext: "Ironed & packaged",
      icon: "package"
    }
  ],

  // Status values: 'Payment Pending', 'Paid', 'In Production', 'Ready to Ship', 'Delivered'
  orders: [
    {
      id: "ORD-101",
      garmentName: "Linen Tiered Midi Dress",
      category: "Dresses",
      client: "Ananya Sharma",
      phone: "+91 98471 23456",
      email: "ananya.sharma@gmail.com",
      fabric: "Pure Organic Linen (Natural Taupe)",
      measurements: "Bust 34\" | Waist 28\" | Hip 37\" | Length 44\"",
      amount: 2850,
      orderDate: "2026-09-18",
      deliveryDueDate: "2026-09-26",
      status: "In Production",
      stage: "Stitching & Tier Gathering",
      tailor: "Master Tailor Rahim",
      imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      notes: "Pockets requested on both sides. Breathable soft lining."
    },
    {
      id: "ORD-102",
      garmentName: "Cotton Kurti with Hand Embroidery",
      category: "Kurtas",
      client: "Pooja Menon",
      phone: "+91 97450 88214",
      email: "pooja.menon@outlook.com",
      fabric: "Pure Cotton Cambric (Off-White & Mocha)",
      measurements: "Bust 36\" | Shoulder 15\" | Sleeve 18\" | Length 42\"",
      amount: 1950,
      orderDate: "2026-09-19",
      deliveryDueDate: "2026-09-25",
      status: "Ready to Ship",
      stage: "Final Steam Press & Tagging",
      tailor: "Artisan Meera",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      notes: "Wooden handcrafted buttons. Packed for courier."
    },
    {
      id: "ORD-103",
      garmentName: "Organza Anarkali Set with Dupatta",
      category: "Festive Wear",
      client: "Fatima Zahra",
      phone: "+91 94473 11290",
      email: "fatima.z@yahoo.com",
      fabric: "Soft Crushed Organza (Warm Cream & Rose Taupe)",
      measurements: "Bust 35\" | Waist 29\" | Flare 3.5m | Height 5'4\"",
      amount: 4800,
      orderDate: "2026-09-15",
      deliveryDueDate: "2026-09-28",
      status: "Paid",
      stage: "Pattern Cutting & Flare Panels",
      tailor: "Master Tailor Rahim",
      imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      notes: "Scalloped lace border on dupatta."
    },
    {
      id: "ORD-104",
      garmentName: "Floral Silk Slip Dress",
      category: "Dresses",
      client: "Rhea Mathew",
      phone: "+91 98950 44321",
      email: "rhea.m@gmail.com",
      fabric: "Mulberry Silk-Satin (Espresso Brown)",
      measurements: "Bust 33\" | Waist 26\" | Hip 36\" | Length 48\"",
      amount: 2450,
      orderDate: "2026-09-20",
      deliveryDueDate: "2026-09-29",
      status: "Payment Pending",
      stage: "Awaiting UPI Payment Confirmation",
      tailor: "Artisan Suresh",
      imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      notes: "Bias cut with adjustable cowl neckline."
    },
    {
      id: "ORD-105",
      garmentName: "Tailored Linen Blazer",
      category: "Outerwear",
      client: "Sneha Nair",
      phone: "+91 96055 77123",
      email: "sneha.nair@corporate.in",
      fabric: "Structured Pure Linen (Warm Saddle Brown)",
      measurements: "Shoulder 15.5\" | Bust 36\" | Waist 30\" | Length 27\"",
      amount: 3600,
      orderDate: "2026-09-12",
      deliveryDueDate: "2026-09-22",
      status: "Delivered",
      stage: "Delivered to Customer",
      tailor: "Master Tailor Rahim",
      imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      notes: "Customer confirmed perfect fit for studio wear."
    },
    {
      id: "ORD-106",
      garmentName: "Mulberry Cotton Co-ord Set",
      category: "Co-ords",
      client: "Diya Thomas",
      phone: "+91 94002 65432",
      email: "diya.thomas@gmail.com",
      fabric: "Textured Cotton Slub (Beige & Coffee)",
      measurements: "Top: Bust 34\" | Bottom: Waist 28\" | Pant Length 38\"",
      amount: 2200,
      orderDate: "2026-09-17",
      deliveryDueDate: "2026-09-27",
      status: "In Production",
      stage: "Trouser Stitching & Elastic Waistband",
      tailor: "Artisan Meera",
      imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      notes: "Relaxed fit crop shirt with wide-leg trousers."
    },
    {
      id: "ORD-107",
      garmentName: "Georgette Pleated Maxi Dress",
      category: "Dresses",
      client: "Aysha Rahman",
      phone: "+91 98460 33445",
      email: "aysha.r@gmail.com",
      fabric: "Crushed Soft Georgette (Chocolate Brown)",
      measurements: "Bust 35\" | Waist 29\" | Length 52\"",
      amount: 3200,
      orderDate: "2026-09-21",
      deliveryDueDate: "2026-09-30",
      status: "Payment Pending",
      stage: "Fabric Measuring & Cutting Queue",
      tailor: "Artisan Suresh",
      imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
      notes: "Includes matching belt with wooden buckle."
    },
    {
      id: "ORD-108",
      garmentName: "Embroidered Festive Kurta",
      category: "Kurtas",
      client: "Kavya Pillai",
      phone: "+91 97441 99008",
      email: "kavya.pillai@gmail.com",
      fabric: "Chanderi Silk Cotton (Warm Cream)",
      measurements: "Bust 34\" | Waist 28\" | Length 44\"",
      amount: 2650,
      orderDate: "2026-09-14",
      deliveryDueDate: "2026-09-24",
      status: "Ready to Ship",
      stage: "Packaging & Quality Check",
      tailor: "Artisan Meera",
      imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      notes: "Dispatched via local delivery courier."
    }
  ],

  // Fabric & Raw Material Inventory (priced realistically per metre in INR ₹)
  fabrics: [
    {
      id: "FAB-01",
      name: "Pure Organic Linen 60 Lea",
      origin: "Surat, Gujarat",
      shade: "Warm Saddle Brown (#6B4636)",
      yardsAvailable: 45,
      costPerYard: "₹550 / m",
      composition: "100% Linen",
      status: "In Stock"
    },
    {
      id: "FAB-02",
      name: "Pure Cotton Cambric 60s",
      origin: "Erode, Tamil Nadu",
      shade: "Warm Off-White (#FAF8F6)",
      yardsAvailable: 78,
      costPerYard: "₹280 / m",
      composition: "100% Breathable Cotton",
      status: "In Stock"
    },
    {
      id: "FAB-03",
      name: "Semi-Silk Chanderi Weave",
      origin: "Chanderi, MP",
      shade: "Warm Cream / Biscuit",
      yardsAvailable: 22,
      costPerYard: "₹420 / m",
      composition: "Cotton-Silk Blend",
      status: "Low Stock"
    },
    {
      id: "FAB-04",
      name: "Mulberry Silk-Satin 19mm",
      origin: "Bangalore, Karnataka",
      shade: "Deep Espresso (#3A2118)",
      yardsAvailable: 18,
      costPerYard: "₹850 / m",
      composition: "100% Mulberry Silk",
      status: "Low Stock"
    },
    {
      id: "FAB-05",
      name: "Crushed Soft Georgette",
      origin: "Surat, Gujarat",
      shade: "Coffee Brown (#806B61)",
      yardsAvailable: 60,
      costPerYard: "₹320 / m",
      composition: "High Twist Poly-Georgette",
      status: "In Stock"
    }
  ],

  // Monthly order volume chart data - Realistic clothing startup scale
  revenueChart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    amounts: [24, 28, 26, 34, 38, 42], // orders completed
    displayLabels: ["24", "28", "26", "34", "38", "42"],
    ordersCount: [24, 28, 26, 34, 38, 42]
  },

  // Garment Category Breakdown (Shades of brown/beige only)
  categoryBreakdown: [
    { label: "Dresses & Co-ords", percentage: 42, color: "#3A2118" },
    { label: "Kurtas & Festive Sets", percentage: 28, color: "#6B4636" },
    { label: "Custom Tailored Fits", percentage: 18, color: "#9A7563" },
    { label: "Tops & Separates", percentage: 12, color: "#D5C5B9" }
  ],

  // Customer Directory (Direct customer contacts & measurements)
  clients: [
    {
      name: "Ananya Sharma",
      phone: "+91 98471 23456",
      email: "ananya.sharma@gmail.com",
      location: "Kochi, Kerala",
      totalSpent: "₹8,550",
      garmentsCreated: 3,
      measurements: "Bust 34\" | Waist 28\" | Hip 37\" | Height 5'5\"",
      notes: "Prefers relaxed linen fits, earthy tones, pockets on all dresses."
    },
    {
      name: "Pooja Menon",
      phone: "+91 97450 88214",
      email: "pooja.menon@outlook.com",
      location: "Bangalore, Karnataka",
      totalSpent: "₹6,400",
      garmentsCreated: 3,
      measurements: "Bust 36\" | Shoulder 15\" | Sleeve 18\" | Height 5'6\"",
      notes: "Daily office wear kurtas and breathable cotton co-ords."
    },
    {
      name: "Fatima Zahra",
      phone: "+91 94473 11290",
      email: "fatima.z@yahoo.com",
      location: "Calicut, Kerala",
      totalSpent: "₹14,200",
      garmentsCreated: 4,
      measurements: "Bust 35\" | Waist 29\" | Flare 3.5m | Height 5'4\"",
      notes: "Festive anarkalis and pastel organza dupattas with delicate borders."
    },
    {
      name: "Sneha Nair",
      phone: "+91 96055 77123",
      email: "sneha.nair@corporate.in",
      location: "Chennai, Tamil Nadu",
      totalSpent: "₹9,800",
      garmentsCreated: 3,
      measurements: "Shoulder 15.5\" | Bust 36\" | Waist 30\" | Height 5'7\"",
      notes: "Minimalist linen blazers, trousers, clean geometric cuts."
    }
  ]
};
