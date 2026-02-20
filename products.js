const allProducts = [
  // --- CELULARES ---
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A56 5G 256GB/8RAM', price: 3199.99, pix: 3199.99, img: 'images/samsung_a56_5g.jpg', badge: '🆕 NOVO' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A26 5G 256GB/8RAM', price: 2099.99, pix: 1899.99, img: 'images/samsung_a26_5g.jpg', badge: '🔥 OFERTA' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A17 4G 256GB/8RAM', price: 1899.99, pix: 1899.99, img: 'images/samsung_a16_5g.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A16 5G 128GB/4RAM', price: 1799.99, pix: 1799.99, img: 'images/samsung_a16_5g.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A17 4G 128GB/4RAM', price: 1599.99, pix: 1599.99, img: 'images/samsung_a16_5g.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A16 128GB/4RAM', price: 1799.99, pix: 1499.99, img: 'images/samsung_a16_5g.jpg', badge: '⬇️ QUEDA DE PREÇO' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A07 128GB/4RAM', price: 1199.99, pix: 1199.99, img: 'images/samsung_a07.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A06 128GB/4RAM', price: 999.99, pix: 799.99, img: 'images/samsung_a06.jpg', badge: '🔥🔥🔥' },
  
  { category: 'Smartphone', brand: 'Apple', name: 'iPhone 16 128GB', price: 6999.99, pix: 5999.99, img: 'images/iphone_16.jpg', badge: 'DESTACADO' },
  { category: 'Smartphone', brand: 'Apple', name: 'iPhone 17 256GB', price: 8999.99, pix: 7999.99, img: 'images/iphone_17.jpg', badge: 'PRÉ-VENDA' },
  { category: 'Smartphone', brand: 'Apple', name: 'iPhone 17 Pro Max 256GB', price: 12499.99, pix: 10999.99, img: 'images/iphone_17_pro_max.jpg', badge: '🔥 TOP DE LINHA' },
  
  { category: 'Smartphone', brand: 'Xiaomi', name: 'POCO X7 PRO IRON MAN 512GB/12RAM', price: 5499.99, pix: 5499.99, img: 'images/poco_x7_pro_iron_man.jpg', badge: 'ED. LIMITADA' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'POCO X7 PRO 512GB/12RAM', price: 3999.99, pix: 3999.99, img: 'images/poco_x7_pro.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'NOTE 14 PRO 256GB/8RAM', price: 2699.99, pix: 2699.99, img: 'images/redmi_note14_pro.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'NOTE 14 256GB/8RAM', price: 2299.99, pix: 2299.99, img: 'images/redmi_note14_pro.jpg', badge: '⬇️ PROMO' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'REDMI 14C 256GB/8RAM', price: 1699.99, pix: 1499.99, img: 'images/redmi_14c.jpg', badge: 'MAIS VENDIDO' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'REDMI A5 64GB/3RAM', price: 999.99, pix: 799.99, img: 'images/redmi_a5.jpg', badge: 'PREÇO BAIXO' },
  
  { category: 'Smartphone', brand: 'Motorola', name: 'Moto G15 256GB', price: 1699.99, pix: 1499.99, img: 'images/moto_g06.jpg', badge: 'NOVIDADE' },
  { category: 'Smartphone', brand: 'Motorola', name: 'Moto G06 128GB', price: 1199.99, pix: 1199.99, img: 'images/moto_g06.jpg', badge: '🆕' },
  { category: 'Smartphone', brand: 'Motorola', name: 'Moto G05 128GB', price: 1099.99, pix: 1099.99, img: 'images/moto_g05.jpg', badge: '' },
  
  { category: 'Smartphone', brand: 'Realme', name: 'Realme 14 Pro+ 512GB', price: 4499.99, pix: 4499.99, img: 'images/realme_14_pro_plus.jpg', badge: 'POTÊNCIA' },
  { category: 'Smartphone', brand: 'Realme', name: 'Realme 14 Pro 256GB', price: 2999.99, pix: 2999.99, img: 'images/realme_14_pro.jpg', badge: '⬇️ OFERTA' },
  { category: 'Smartphone', brand: 'Realme', name: 'Realme 14 256GB', price: 2499.99, pix: 2499.99, img: 'images/realme_14_5g.jpg', badge: '🖤 BLACK FRIDAY' },
  { category: 'Smartphone', brand: 'Realme', name: 'Realme C75 NFC 256GB', price: 1999.99, pix: 1899.99, img: 'images/realme_c75.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Realme', name: 'Realme Note 60X 64GB', price: 799.99, pix: 799.99, img: 'images/realme_note60.jpg', badge: 'ECONÔMICO' },
  
  // --- CAIXAS DE SOM ---
  { category: 'Som', brand: 'JBL', name: 'PARTYBOX ULTIMATE 1.100', price: 8999.99, pix: 8999.99, img: 'images/speakers/jbl_partybox_ultimate.jpg', badge: '🔸🔊' },
  { category: 'Som', brand: 'JBL', name: 'PARTYBOX JBL 720', price: 6999.99, pix: 6499.99, img: 'images/speakers/jbl_partybox_ultimate.jpg', badge: '🆕 🔥🔥🔥' },
  { category: 'Som', brand: 'JBL', name: 'PARTYBOX 710', price: 5499.99, pix: 5499.99, img: 'images/speakers/jbl_partybox_ultimate.jpg', badge: '' },
  { category: 'Som', brand: 'JBL', name: 'PARTYBOX 520', price: 5999.99, pix: 5499.99, img: 'images/speakers/jbl_partybox_ultimate.jpg', badge: '🆕 🔥🔥🔥' },
  { category: 'Som', brand: 'JBL', name: 'PARTYBOX STAGE 320', price: 4499.99, pix: 4499.99, img: 'images/speakers/jbl_partybox_stage320.jpg', badge: '' },
  { category: 'Som', brand: 'JBL', name: 'BOOMBOX 3 WI-FI', price: 3499.99, pix: 3499.99, img: 'images/speakers/aiwa_boombox_plus.jpg', badge: '' },
  { category: 'Som', brand: 'JBL', name: 'AUTHENTICS 500', price: 3499.99, pix: 3499.99, img: 'images/speakers/aiwa_boombox_plus.jpg', badge: '' },
  { category: 'Som', brand: 'JBL', name: 'BOOMBOX 4', price: 3499.99, pix: 3199.99, img: 'images/speakers/aiwa_boombox_plus.jpg', badge: '🆕 🔥🔥🔥' },
  { category: 'Som', brand: 'JBL', name: 'BOOMBOX 3', price: 2799.99, pix: 2499.99, img: 'images/speakers/aiwa_boombox_plus.jpg', badge: '🔥🔥' },
  { category: 'Som', brand: 'JBL', name: 'PARTYBOX ENCORE 2 (c/ 2 microfones)', price: 2799.99, pix: 2499.99, img: 'images/speakers/jbl_partybox_stage320.jpg', badge: '🆕 🔥🔥🔥' },
  { category: 'Som', brand: 'JBL', name: 'PARTYBOX ENCORE ESSENTIAL 2', price: 2199.99, pix: 1999.99, img: 'images/speakers/jbl_partybox_stage320.jpg', badge: '🆕 🔥🔥🔥' },
  { category: 'Som', brand: 'JBL', name: 'XTREME 4', price: 2199.99, pix: 1999.99, img: 'images/speakers/aiwa_boombox_plus.jpg', badge: '🆕 🔥🔥🔥' },
  { category: 'Som', brand: 'JBL', name: 'FLIP 7', price: 899.99, pix: 899.99, img: 'images/speakers/aiwa_boombox_plus.jpg', badge: '' },
  
  { category: 'Som', brand: 'Amvox', name: 'AMVOX ACA 1900 - 1900W', price: 2799.99, pix: 2799.99, img: 'images/speakers/amvox_aca1900.png', badge: '🔸🔊' },
  { category: 'Som', brand: 'Amvox', name: 'AMVOX ACA 1101 - 1000W', price: 1599.99, pix: 1599.99, img: 'images/speakers/amvox_aca1101.jpg', badge: '' },
  { category: 'Som', brand: 'Amvox', name: 'AMVOX ACA BAGVOX - 600W', price: 1099.99, pix: 1099.99, img: 'images/speakers/amvox_aca1900.png', badge: '' },
  
  { category: 'Som', brand: 'Sumay', name: 'SUMAY LIGHT BOX FULL LED - 800W', price: 1599.99, pix: 1599.99, img: 'images/speakers/amvox_aca1101.jpg', badge: '🔸🔊' },
  { category: 'Som', brand: 'Sumay', name: 'SUMAY GOLDBOX - 120W', price: 1499.99, pix: 1499.99, img: 'images/speakers/amvox_aca1101.jpg', badge: '' },
  
  { category: 'Som', brand: 'Aiwa', name: 'AIWA BOOMBOX LIGHTS PLUS - 200W', price: 2399.99, pix: 2399.99, img: 'images/speakers/aiwa_boombox_plus.jpg', badge: '🔸🔊' },
  { category: 'Som', brand: 'Aiwa', name: 'AIWA BOOMBOX PLUS + FONE BRINDE', price: 2299.99, pix: 2299.99, img: 'images/speakers/aiwa_boombox_plus.jpg', badge: '💥 BRINDE' },
  
  { category: 'Som', brand: 'Imenso', name: 'CAIXA DE SOM IMENSO X73 - 200W', price: 2199.99, pix: 2199.99, img: 'images/speakers/aiwa_boombox_plus.jpg', badge: '🔸🔉' },
  { category: 'Som', brand: 'Imenso', name: 'CAIXA DE SOM IMENSO X69 - 80W', price: 1799.99, pix: 1799.99, img: 'images/speakers/aiwa_boombox_plus.jpg', badge: '' },
  
  { category: 'Som', brand: 'FAM', name: 'CAIXA DE SOM FAM A046 IP67 - 40W', price: 399.99, pix: 399.99, img: 'images/speakers/aiwa_boombox_plus.jpg', badge: '⬇️ BAIXOU 🔥🔥🔥' },
  
  // --- TABLETS ---
  { category: 'Tablet', brand: 'Samsung', name: 'GALAXY TAB A9+', price: 999.99, pix: 999.99, img: 'images/galaxy_tab_a9_plus.jpg', badge: '🔸🖥️' },
  { category: 'Tablet', brand: 'Xiaomi', name: 'REDMI PAD 2', price: 2099.99, pix: 2099.99, img: 'images/redmi_pad2.jpg', badge: '' },
];
