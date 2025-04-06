export interface Category {
    id: string;
    name: string;
    image: string;
    products: string[]; // list of product names or ids
  }

export const productCategories = [
    {
      id: "syringe-with-needle",
      name: "NIPRO SYRINGE WITH NEEDLE",
      image: "/images/syringes-withneedles.png",
      products: [
        "1mL Tuberculin Syringe w/ 25GX5/8 Needle E-Beam",
        "1mL Tuberculin Syringe w/ 26GX1/2 Needle E-beam",
        "0.5mL 30Gx5/16 (8mm) INSULIN 100U E-Beam, Blister",
        "1mL 27Gx1/2\" INSULIN 100UE-Beam, Blister",
        "1mL 29Gx1/2\" INSULIN 100U E-Beam, Blister",
        "1mL 30Gx5/16\" INSULIN 100U E-Beam, Blister",
        "1mL 30Gx1/2\" INSULIN 100U E-Beam, Blister",
        "3mL Syringe Luer Lock w/ 23GX1 Needle E-Beam",
        "5mL Syringe Luer Lock w/ 21GX1 Needle E-beam",
        "5mL Syringe Luer Lock w/ 23GX1 Needle E-beam",
        "10mL Syringe Luer Lock w/ 21GX1 Needle E-beam",
        "10mL Syringe Luer Lock w/ 23GX1 Needle E-beam"
      ]
    },
    {
      id: "syringe-without-needle",
      name: "NIPRO SYRINGE WITHOUT NEEDLE",
      image: "/images/nipro-syringes.png",
      products: [
        "3mL Syringe LUER LOCK W/O Needle E-beam",
        "3mL Syringe LUER SLIP W/O Needle (ECC. TIP) E-beam",
        "5mL Syringe LUER LOCK W/O Needle E-beam",
        "5mL Syringe LUER SLIP W/O Needle E E-beam",
        "10mL Syringe LUER LOCK W/O Needle E-beam",
        "10mL Syringe LUER SLIP W/O Needle E-beam",
        "20mL Syringe LUER LOCK W/O Needle E-beam",
        "20mL Syringe LUER SLIP W/O Needle E E-beam",
        "30mL Syringe LUER LOCK W/O Needle E-beam",
        "50mL Syringe LUER LOCK W/O Needle E-beam",
        "50mL CATHETER TIP W/O Needle (ECC. TIP) E-beam",
        "50mL LUER SLIP W/O NEEDLE (ECC. TIP) E-beam"
      ]
    },
    {
      id: "hypodermic-needle",
      name: "NIPRO HYPODERMIC NEEDLE",
      image: "/images/hypodermic-needles.png",
      products: [
        "PACKED NEEDLE 18Gx1 ETO",
        "PACKED NEEDLE 18Gx1-1/2 ETO",
        "PACKED NEEDLE 19Gx1-1/2 ETO",
        "PACKED NEEDLE 20Gx1 ETO",
        "PACKED NEEDLE 21Gx1 ETO",
        "PACKED NEEDLE 22Gx1 ETO",
        "PACKED NEEDLE 23Gx1 ETO",
        "PACKED NEEDLE 24Gx1 ETO",
        "PACKED NEEDLE 25Gx5/8 ETO",
        "PACKED NEEDLE 25Gx1 ETO",
        "PACKED NEEDLE 26Gx1/2 ETO (CE)",
        "PACKED NEEDLE 27Gx1/2 ETO (CE)"
      ]
    },
    {
      id: "safetouch-catheter",
      name: "NIPRO SAFETOUCH SAFETY IV CATHETER",
      image: "/images/catheter.webp",
      products: [
        "SAFETOUCH WING CATH W/O Injection Port 18Gx1-1/4 ETO",
        "SAFETOUCH WING CATH W/O Injection Port 20Gx1-1/4 ETO",
        "SAFETOUCH WING CATH W/O Injection Port 22Gx1 ETO",
        "SAFETOUCH WING CATH W/O Injection Port 24Gx3/4 ETO",
      ]
    },
    {
      id: "amsafe-prefilled",
      name: "NIPRO AMSAFE PREFILLED SYRINGE",
      image: "/images/prefilled.png",
      products: [
        "3mL AMSAFE Prefilled Syringe",
        "5mL AMSAFE Prefilled Syringe",
        "10mL AMSAFE Prefilled Syringe",
        
      ]
    },
    {
      id: "spinal-needle",
      name: "NIPRO SPINAL NEEDLE",
      image: "/images/spinalneedle.png",
      products: [
        "Spinal Needle 18Gx3-1/2 (88mm) CONTAINER (ETO)",
        "Spinal Needle 20Gx3-1/2 (88mm) CONTAINER (ETO)",
        "Spinal Needle 21Gx3-1/2 (88mm) CONTAINER (ETO)",
        "Spinal Needle 22Gx3-1/2 (88mm) CONTAINER (ETO)",
        "Spinal Needle 26Gx3-1/2 (88mm) CONTAINER (ETO)",
        "Spinal Needle 27Gx3-1/2 (88mm) CONTAINER (ETO)"
      ]
    },
    {
      id: "surefuser",
      name: "NIPRO SUREFUSER ELASTOMERIC INFUSION PUMP, DISPOSABLE",
      image: "/images/surefuser.png",
      products: [
        "Surefuser Variable Infusion Elastomeric Infusion System, 100mL",
        "Infusion Elastomeric Infusion System, 300mL",
      ]
    },
    {
      id: "other-products",
      name: "OTHER HOSPITAL PRODUCTS",
      image: "/images/administration-set.png",
      products: [
        "Nipro Safetouch Plug (Needless Connector)",
        "Nipro 3 Way Stop Cock",
        "Nipro IV Set Blood Administration Set",
      ]
    }
  ];