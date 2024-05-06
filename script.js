// Add your JavaScript code here
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSection = event.target.textContent.toLowerCase();
    const targetElement = document.getElementById(targetSection);
    targetElement.scrollIntoView({ behavior: 'smooth' });

    if (targetSection === 'preparation') {
      loadPreparationContent();
    } else if (targetSection === 'capsule') {
      loadCapsuleContent();
    } else if (targetSection === 'tips') {
      loadTipsContent();
    }
  });
});

function loadPreparationContent() {
  const preparationSection = document.getElementById('preparation');
  preparationSection.innerHTML = `
    <div class="content-grid">
      <a href="#" class="content-item" data-target="food">
        <h3>Food</h3>
        <p>Explore the special dietary requirements and meal options for space travel.</p>
      </a>
      <a href="#" class="content-item" data-target="medicine">
        <h3>Medicine</h3>
        <p>Understand the medical precautions and supplies needed for your journey.</p>
      </a>
      <a href="#" class="content-item" data-target="clothing">
        <h3>Clothing</h3>
        <p>Learn about the specialized apparel and accessories for space exploration.</p>
      </a>
    </div>
  `;

  const preparationItems = preparationSection.querySelectorAll('.content-item');
  preparationItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const targetContent = event.currentTarget.dataset.target;
      loadSubContent(targetContent);
    });
  });
}

function loadCapsuleContent() {
  const capsuleSection = document.getElementById('capsule');
  capsuleSection.innerHTML = `
    <div class="content-grid">
      <a href="#" class="content-item" data-target="lounge">
        <h3>Lounge</h3>
        <p>Relax and enjoy the comfortable living area of your space capsule.</p>
      </a>
      <a href="#" class="content-item" data-target="kitchen">
        <h3>Kitchen</h3>
        <p>Explore the specialized food preparation facilities in your space capsule.</p>
      </a>
      <a href="#" class="content-item" data-target="bath">
        <h3>Bath Space</h3>
        <p>Learn about the unique bathing and hygiene solutions in your space capsule.</p>
      </a>
    </div>
  `;

  const capsuleItems = capsuleSection.querySelectorAll('.content-item');
  capsuleItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const targetContent = event.currentTarget.dataset.target;
      loadSubContent(targetContent);
    });
  });
}

function loadTipsContent() {
  const tipsSection = document.getElementById('tips');
  tipsSection.innerHTML = `
    <div class="content-grid">
      <a href="#" class="content-item" data-target="packing">
        <h3>Packing List</h3>
        <p>Discover the essential items to pack for your space trip.</p>
      </a>
      <a href="#" class="content-item" data-target="zero-gravity">
        <h3>Zero Gravity Tips</h3>
        <p>Learn how to navigate and adapt to the zero-gravity environment.</p>
      </a>
      <a href="#" class="content-item" data-target="photography">
        <h3>Photography Guide</h3>
        <p>Capture amazing photos and videos during your space journey.</p>
      </a>
    </div>
  `;

  const tipsItems = tipsSection.querySelectorAll('.content-item');
  tipsItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const targetContent = event.currentTarget.dataset.target;
      loadSubContent(targetContent);
    });
  });
}

function loadSubContent(target) {
  const subContentSection = document.getElementById('sub-content');
  subContentSection.innerHTML = '';

  switch (target) {
    case 'food':
      subContentSection.innerHTML = `
        <h2>Food</h2>
        <p>In space, astronauts consume a variety of specially formulated food and beverages to meet their nutritional needs. These include freeze-dried, thermostabilized, and rehydratable meals, as well as snacks and beverages.</p>
      `;
      break;
    case 'medicine':
      subContentSection.innerHTML = `
        <h2>Medicine</h2>
        <p>Space travelers must be prepared with a comprehensive medical kit, including medications for common illnesses, first aid supplies, and specialized equipment to address any health concerns that may arise during the mission.</p>
      `;
      break;
    case 'clothing':
      subContentSection.innerHTML = `
        <h2>Clothing</h2>
        <p>Astronauts wear specially designed clothing that is lightweight, durable, and tailored for the unique environment of space. This includes pressure suits, thermal layers, and personal hygiene garments.</p>
      `;
      break;
    case 'lounge':
      subContentSection.innerHTML = `
        <h2>Lounge</h2>
        <p>The lounge area of your space capsule is designed for relaxation and recreation. It features comfortable seating, entertainment systems, and panoramic views of the Earth and cosmos.</p>
      `;
      break;
    case 'kitchen':
      subContentSection.innerHTML = `
        <h2>Kitchen</h2>
        <p>The kitchen in your space capsule is equipped with specialized appliances and tools for preparing and consuming meals in a microgravity environment. It includes a food rehydration system, storage compartments, and utensils designed for use in zero gravity.</p>
      `;
      break;
    case 'bath':
      subContentSection.innerHTML = `
        <h2>Bath Space</h2>
        <p>The bath space in your space capsule features a unique design to accommodate personal hygiene activities in a microgravity environment. It includes a specialized shower system, personal care products, and storage for hygiene items.</p>
      `;
      break;
    case 'packing':
      subContentSection.innerHTML = `
        <h2>Packing List</h2>
        <p>When packing for your space trip, be sure to include essential items such as comfortable clothing, personal care products, entertainment devices, and any necessary medications or medical supplies.</p>
      `;
      break;
    case 'zero-gravity':
      subContentSection.innerHTML = `
        <h2>Zero Gravity Tips</h2>
        <p>Navigating and adapting to the zero-gravity environment requires special techniques. Learn how to properly move, secure yourself, and perform tasks in the absence of gravity.</p>
      `;
      break;
    case 'photography':
      subContentSection.innerHTML = `
        <h2>Photography Guide</h2>
        <p>Capturing stunning images and videos during your space journey requires specialized techniques and equipment. Familiarize yourself with camera settings, lighting conditions, and composition strategies for the unique environment.</p>
      `;
      break;
    default:
      subContentSection.innerHTML = '';
  }

  const subContentElement = document.getElementById('sub-content');
  subContentElement.scrollIntoView({ behavior: 'smooth' });
}

const bookNowBtn = document.querySelector('.btn');
bookNowBtn.addEventListener('click', () => {
  const bookingForm = document.createElement('div');
  bookingForm.classList.add('booking-form');
  bookingForm.innerHTML= `
    <div class="booking-form-content">
    // Add your JavaScript code here
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSection = event.target.textContent.toLowerCase();
    const targetElement = document.getElementById(targetSection);
    targetElement.scrollIntoView({ behavior: 'smooth' });

    if (targetSection === 'preparation') {
      loadPreparationContent();
    } else if (targetSection === 'capsule') {
      loadCapsuleContent();
    } else if (targetSection === 'tips') {
      loadTipsContent();
    }
  });
});

function loadPreparationContent() {
  const preparationSection = document.getElementById('preparation');
  preparationSection.innerHTML = `
    <div class="content-grid">
      <a href="#" class="content-item" data-target="food">
        <h3>Food</h3>
        <p>Explore the special dietary requirements and meal options for space travel.</p>
      </a>
      <a href="#" class="content-item" data-target="medicine">
        <h3>Medicine</h3>
        <p>Understand the medical precautions and supplies needed for your journey.</p>
      </a>
      <a href="#" class="content-item" data-target="clothing">
        <h3>Clothing</h3>
        <p>Learn about the specialized apparel and accessories for space exploration.</p>
      </a>
    </div>
  `;

  const preparationItems = preparationSection.querySelectorAll('.content-item');
  preparationItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const targetContent = event.currentTarget.dataset.target;
      loadSubContent(targetContent);
    });
  });
}

function loadCapsuleContent() {
  const capsuleSection = document.getElementById('capsule');
  capsuleSection.innerHTML = `
    <div class="content-grid">
      <a href="#" class="content-item" data-target="lounge">
        <h3>Lounge</h3>
        <p>Relax and enjoy the comfortable living area of your space capsule.</p>
      </a>
      <a href="#" class="content-item" data-target="kitchen">
        <h3>Kitchen</h3>
        <p>Explore the specialized food preparation facilities in your space capsule.</p>
      </a>
      <a href="#" class="content-item" data-target="bath">
        <h3>Bath Space</h3>
        <p>Learn about the unique bathing and hygiene solutions in your space capsule.</p>
      </a>
    </div>
  `;

  const capsuleItems = capsuleSection.querySelectorAll('.content-item');
  capsuleItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const targetContent = event.currentTarget.dataset.target;
      loadSubContent(targetContent);
    });
  });
}

function loadTipsContent() {
  const tipsSection = document.getElementById('tips');
  tipsSection.innerHTML = `
    <div class="content-grid">
      <a href="#" class="content-item" data-target="packing">
        <h3>Packing List</h3>
        <p>Discover the essential items to pack for your space trip.</p>
      </a>
      <a href="#" class="content-item" data-target="zero-gravity">
        <h3>Zero Gravity Tips</h3>
        <p>Learn how to navigate and adapt to the zero-gravity environment.</p>
      </a>
      <a href="#" class="content-item" data-target="photography">
        <h3>Photography Guide</h3>
        <p>Capture amazing photos and videos during your space journey.</p>
      </a>
    </div>
  `;

  const tipsItems = tipsSection.
