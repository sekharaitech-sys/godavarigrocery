
import React, { useState, useEffect } from 'react';

// (Products, faqData, blogData kept as in original)
const productsData = [
  { id: 1, name: "Sortex Idly Ravva", price: "₹85", description: "Superior quality sortex idly ravva, perfect for making soft and fluffy idlis. 1kg pack.", category: "Grains & Flours", image: "🥘", imageUrl: "/images/idly_ravva.jpg" },
  { id: 2, name: "Rice Ravva", price: "₹75", description: "Double suky sortex rice ravva, ideal for traditional South Indian dishes. 500g pack.", category: "Grains & Flours", image: "🍚", imageUrl: "/images/rice_ravva.jpg" },
  { id: 3, name: "Suji Rava", price: "₹95", description: "Premium quality suji rava for making delicious upma, kesari, and other dishes. 500g pack.", category: "Grains & Flours", image: "⚪", imageUrl: "/images/suji_rava.jpg" },
  { id: 4, name: "Ragi Flour", price: "₹120", description: "Rich source of calcium, nutritious ragi flour for healthy meals. 500g pack.", category: "Grains & Flours", image: "🟤", imageUrl: "/images/ragi_flour.jpg" },
  { id: 5, name: "Palmolein Oil", price: "₹180", description: "Refined palmolein oil for all your cooking needs. 1 liter pack.", category: "Cooking Oils", image: "🛢️", imageUrl: "/images/palmolein_oil.jpg" },
  { id: 6, name: "Cold Pressed Oil", price: "₹350", description: "Premium cold pressed oil, retaining all natural nutrients and flavor. 1 liter.", category: "Cooking Oils", image: "🫒", imageUrl: "/images/cold_pressed_oil.jpg" },
  { id: 7, name: "Wheat Ravva", price: "₹80", description: "Fine quality wheat ravva, perfect for upma and other traditional dishes. 500g pack.", category: "Grains & Flours", image: "🌾", imageUrl: "/images/idly_ravva.jpg" },
  { id: 8, name: "Moong Ravva", price: "₹110", description: "Nutritious moong dal ravva, ideal for healthy breakfast options. 500g pack.", category: "Grains & Flours", image: "🟢", imageUrl: "/images/rice_ravva.jpg" },
  { id: 9, name: "Organic Honey", price: "₹180", description: "Pure, organic honey harvested from local apiaries. 500g bottle.", category: "Condiments", image: "🍯", imageUrl: "/images/idly_ravva.jpg" }
];

const faqData = [
  { question: "How fast is your delivery?", answer: "We offer express delivery within 2 hours in most areas. Standard delivery takes 24-48 hours. You can choose your preferred delivery slot during checkout." },
  { question: "Are your products fresh?", answer: "Yes! All our products are sourced directly from verified suppliers and farmers. We maintain strict quality control and cold chain logistics to ensure maximum freshness." },
  { question: "What is your return policy?", answer: "We offer a 100% satisfaction guarantee. If you're not happy with any product, you can return it within 7 days for a full refund or replacement." },
  { question: "Do you deliver on weekends?", answer: "Yes, we deliver 7 days a week. Our extended hours on weekends are 9:00 AM to 11:00 PM. Orders placed before 11:00 PM are delivered the next day." },
  { question: "What payment methods do you accept?", answer: "We accept all major credit/debit cards, digital wallets (Apple Pay, Google Pay), and net banking. All payments are encrypted and secure." },
  { question: "Can I track my order?", answer: "Absolutely! Once your order is confirmed, you'll receive real-time tracking updates via SMS and email. You can also check your order status in your account." },
  { question: "Do you offer organic products?", answer: "Yes, we have a dedicated section for organic and pesticide-free products. These are clearly labeled and sourced from certified organic farms." },
  { question: "Is there a minimum order value?", answer: "Our minimum order value is $20 for standard delivery. For express delivery (within 2 hours), the minimum is $35. Free delivery available on orders above $50." }
];

const blogData = [
  { id: 1, title: "5 Healthy Snacks You Should Include in Your Diet", date: "March 15, 2024", excerpt: "Discover nutritious and delicious snack options that will help you maintain a healthy lifestyle while satisfying your cravings.", category: "Health & Nutrition" },
  { id: 2, title: "How to Store Fresh Produce to Keep it Longer", date: "March 12, 2024", excerpt: "Learn expert tips on proper storage techniques for vegetables and fruits to maximize their shelf life and nutritional value.", category: "Tips & Tricks" },
  { id: 3, title: "The Benefits of Shopping Local and Organic", date: "March 10, 2024", excerpt: "Understanding why choosing local and organic products is better for your health, community, and the environment.", category: "Sustainability" },
  { id: 4, title: "Quick and Easy Recipes Using Pantry Staples", date: "March 8, 2024", excerpt: "Transform simple ingredients from your pantry into delicious meals with these quick and easy recipe ideas.", category: "Recipes" },
  { id: 5, title: "Superfoods: What They Are and Why You Need Them", date: "March 5, 2024", excerpt: "Explore the world of superfoods and learn which nutrient-dense options you should add to your shopping list.", category: "Health & Nutrition" },
  { id: 6, title: "Budget-Friendly Grocery Shopping Guide", date: "March 1, 2024", excerpt: "Smart strategies to help you save money while maintaining quality and nutrition in your grocery purchases.", category: "Money Saving Tips" }
];

// Header component
const Header = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center gap-2">
          <img src="/images/logo_placeholder.png" alt="Godavari" className="w-8 h-8" /> <span>Godavari</span>
        </div>

        <button 
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        <ul className={(mobileMenuOpen ? 'flex' : 'hidden') + ' md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-emerald-600 md:bg-transparent gap-0 md:gap-8 p-4 md:p-0'}>
          {['home', 'about', 'products', 'faq', 'blog', 'contact', 'admin'].map(page => (
            <li key={page}>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onNavigate(page); setMobileMenuOpen(false); }}
                className={'block py-2 md:py-0 font-medium hover:text-emerald-200 transition-colors ' + (currentPage === page ? 'text-emerald-200' : '')}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

// Hero component
const Hero = ({ onNavigate }) => {
  return (
    <section className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Fresh Groceries Delivered to Your Door</h1>
          <p className="text-lg md:text-xl mb-8 opacity-95">Experience the convenience of shopping premium quality groceries online with fast and reliable delivery.</p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button onClick={() => onNavigate('products')} className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Shop Now
            </button>
            <button onClick={() => onNavigate('about')} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 text-8xl">🛒</div>
      </div>
    </section>
  );
};

// ProductCard
const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const getProductGradient = (category) => {
    if (category === "Grains & Flours") return "from-green-50 to-green-100";
    if (category === "Cooking Oils") return "from-orange-50 to-yellow-100";
    return "from-blue-50 to-cyan-50";
  };

  return (
    <div 
      onClick={() => onViewDetails(product)}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer border border-gray-200"
    >
      <div className={'h-48 bg-gradient-to-br ' + getProductGradient(product.category) + ' flex items-center justify-center text-7xl relative overflow-hidden'}>
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <span>{product.image}</span>
        )}
        <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded">
          {product.category === "Grains & Flours" ? "GODAVARI" : "Premium"}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-emerald-600 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
          <button 
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-2"
          >
            <span>🛒</span> Add
          </button>
        </div>
      </div>
    </div>
  );
};

// FAQItem
const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 bg-gray-50 hover:bg-gray-100 flex justify-between items-center text-left transition-colors"
      >
        <span className="font-semibold text-emerald-600">{faq.question}</span>
        <span className={'transform transition-transform ' + (isOpen ? 'rotate-180' : '')}>▼</span>
      </button>
      {isOpen && (
        <div className="p-6 text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

// BlogCard
const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
      <div className="h-48 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center text-5xl">
        📰
      </div>
      <div className="p-6">
        <div className="text-emerald-600 text-sm font-semibold mb-2">{blog.date} • {blog.category}</div>
        <h3 className="text-xl font-semibold mb-3 leading-snug">{blog.title}</h3>
        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
        <a href="#" className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center gap-2">
          Read More →
        </a>
      </div>
    </div>
  );
};

// Pages (Home, About, Products, FAQ, Blog, Admin, Contact)
// For brevity, these are similar to original and kept concise.

const HomePage = ({ onNavigate, onAddToCart, onViewProduct, products }) => {
  return (
    <div>
      <Hero onNavigate={onNavigate} />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onViewDetails={onViewProduct} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button onClick={() => onNavigate('products')} className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
            View All Products
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><h3 className="text-4xl font-bold mb-2">10K+</h3><p className="text-lg">Happy Customers</p></div>
            <div><h3 className="text-4xl font-bold mb-2">24/7</h3><p className="text-lg">Customer Support</p></div>
            <div><h3 className="text-4xl font-bold mb-2">100%</h3><p className="text-lg">Fresh Products</p></div>
            <div><h3 className="text-4xl font-bold mb-2">2hr</h3><p className="text-lg">Fast Delivery</p></div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">About Godavari</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-2xl font-bold text-emerald-600 mb-4">Quality & Freshness Guaranteed</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Godavari is committed to delivering the freshest groceries directly to your doorstep. With over 5 years of experience, we've built a reputation for excellence in quality and customer service.
          </p>
          <ul className="space-y-3">
            {['100% Fresh & Organic Options', 'Competitive Pricing', 'Quick & Reliable Delivery', 'Easy Returns & Refunds', 'Secure Payment Options', '24/7 Customer Support'].map(feature => (
              <li key={feature} className="flex items-center gap-3">
                <span className="text-emerald-500 text-xl">✓</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-9xl text-center">🥗</div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To make fresh, quality groceries accessible to everyone by leveraging technology and building strong relationships with local suppliers.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted online grocery platform, known for quality, reliability, and exceptional customer service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductsPage = ({ onAddToCart, onViewProduct }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onViewDetails={onViewProduct} />
        ))}
      </div>
    </section>
  );
};

const FAQPage = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">Frequently Asked Questions</h2>
      <div>
        {faqData.map((faq, idx) => (
          <FAQItem key={idx} faq={faq} />
        ))}
      </div>
    </section>
  );
};

const BlogPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">Our Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

const AdminPage = ({ products, onUpdateProducts }) => {
  const [editingProducts, setEditingProducts] = useState([...products]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleImageUrlChange = (id, url) => {
    setEditingProducts(editingProducts.map(p => 
      p.id === id ? {...p, imageUrl: url} : p
    ));
  };

  const handleSave = () => {
    onUpdateProducts(editingProducts);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">Product Image Management</h2>

      {showSuccess && (
        <div className="bg-emerald-100 text-emerald-800 p-4 rounded-lg mb-6 text-center">
          ✓ Product images updated successfully!
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">How to add product images:</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          <li>Upload your product images to an image hosting service (like Imgur.com)</li>
          <li>Copy the direct image URL (should end with .jpg, .png, etc.)</li>
          <li>Paste the URL in the corresponding product field below</li>
          <li>Click "Save Changes" to update</li>
        </ol>
      </div>

      <div className="space-y-4">
        {editingProducts.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-emerald-600 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-xl font-bold text-emerald-600">{product.price}</p>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">Image URL:</label>
                <input
                  type="text"
                  value={product.imageUrl}
                  onChange={(e) => handleImageUrlChange(product.id, e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                />
                {product.imageUrl && (
                  <div className="mt-3 border border-gray-200 rounded-lg overflow-hidden">
                    <img src={product.imageUrl} alt="Preview" className="w-full h-32 object-cover" />
                    <p className="text-xs text-gray-500 p-2 bg-gray-50">Preview</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleSave}
          className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </section>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(`Thank you, ${formData.name}! Your message has been sent successfully. We'll contact you soon at ${formData.email}.`);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  const handleChange = (field, value) => {
    setFormData({...formData, [field]: value});
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          {[
            { icon: '📍', title: 'Address', content: 'Kondapalli Vari Street, Mandapeta, East Godavari, AP' },
            { icon: '📞', title: 'Phone', content: '+91 99999 12345' },
            { icon: '✉️', title: 'Email', content: 'info@godavari.com' },
            { icon: '🕐', title: 'Business Hours', content: 'Mon - Fri: 8:00 AM - 10:00 PM\nSat - Sun: 9:00 AM - 11:00 PM' }
          ].map(item => (
            <div key={item.title} className="flex gap-4">
              <div className="text-4xl">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-emerald-600 mb-1">{item.title}</h4>
                <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {successMessage && (
            <div className="bg-emerald-100 text-emerald-800 p-4 rounded-lg">{successMessage}</div>
          )}
          <div>
            <label className="block font-semibold text-emerald-600 mb-2">Your Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block font-semibold text-emerald-600 mb-2">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block font-semibold text-emerald-600 mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block font-semibold text-emerald-600 mb-2">Subject</label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block font-semibold text-emerald-600 mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
            />
          </div>
          <button 
            onClick={handleSubmit}
            className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold text-emerald-400 mb-4">🍃 Godavari</h4>
            <p className="text-gray-300 mb-4">Premium quality groceries delivered fresh to your door. Experience convenience like never before.</p>
            <div className="flex gap-3">
              {['📘', '🐦', '📷', '💼'].map((icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-emerald-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'products', 'blog'].map(page => (
                <li key={page}>
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(page); }} className="text-gray-300 hover:text-emerald-400 transition-colors">
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-emerald-400 mb-4">Support</h4>
            <ul className="space-y-2">
              {[{name: 'FAQ', page: 'faq'}, {name: 'Contact Us', page: 'contact'}, {name: 'Privacy Policy', page: null}, {name: 'Terms & Conditions', page: null}].map(item => (
                <li key={item.name}>
                  <a href="#" onClick={(e) => { e.preventDefault(); if(item.page) onNavigate(item.page); }} className="text-gray-300 hover:text-emerald-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-emerald-400 mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to get special offers and updates</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 rounded text-gray-800" 
              />
              <button 
                onClick={handleNewsletter}
                className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; 2024 Godavari. All rights reserved. | Designed with ❤️ for freshness</p>
        </div>
      </div>
    </footer>
  );
};

// Product Modal
const ProductModal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-xl p-8 max-w-md w-full relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-3xl text-emerald-600 hover:text-emerald-700">×</button>
        <div className="text-center">
          <div className="text-8xl mb-4">{product.image}</div>
          <h2 className="text-2xl font-bold text-emerald-600 mb-2">{product.name}</h2>
          <p className="text-gray-500 mb-4">{product.category}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
          <p className="text-3xl font-bold text-emerald-600 mb-6">{product.price}</p>
          <button 
            onClick={() => { onAddToCart(product); onClose(); }}
            className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App
export default function FreshMart() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [products, setProducts] = useState(productsData);

  const handleAddToCart = (product) => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const handleUpdateProducts = (updatedProducts) => {
    setProducts(updatedProducts);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} onAddToCart={handleAddToCart} onViewProduct={setSelectedProduct} products={products} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'products' && <ProductsPage onAddToCart={handleAddToCart} onViewProduct={setSelectedProduct} products={products} />}
      {currentPage === 'faq' && <FAQPage />}
      {currentPage === 'blog' && <BlogPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'admin' && <AdminPage products={products} onUpdateProducts={handleUpdateProducts} />}

      <Footer onNavigate={setCurrentPage} />

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={handleAddToCart} />}

      {showNotification && (
        <div className="fixed bottom-8 right-8 bg-emerald-500 text-white px-6 py-4 rounded-lg shadow-xl z-50">
          ✓ Added to cart!
        </div>
      )}
    </div>
  );
}
