import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Ship, 
  Globe, 
  Package, 
  Shield, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Users,
  Award,
  Truck,
  Warehouse,
  FileText,
  Search,
  MessageCircle
} from 'lucide-react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Replace this URL with your actual Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxweK4W2sZ0fuIxTd1z6qiZ5OtDDMqW5hTrMVgmX6OXxTMwUoSN3hlQDexs0nNMEnSm/exec'
    
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('Name', formData.name)
      formDataToSend.append('Email', formData.email)
      formDataToSend.append('Phone', formData.phone)
      formDataToSend.append('Company', formData.company)
      formDataToSend.append('Service', formData.service)
      formDataToSend.append('Message', formData.message)

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend
      })

      const result = await response.json()
      console.log("Google Apps Script response:", result);
      
      if (result.result === 'success') {
        alert('Thank you for your inquiry! We will contact you soon.')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error("Error submitting form:", error.message || error);
      alert('There was an error submitting your form. Please try again or contact us directly.')
    }
  }

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Sourcing",
      description: "Expert product sourcing from reliable Chinese manufacturers with quality assurance."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Purchasing",
      description: "Professional procurement services with competitive pricing and quality control."
    },
    {
      icon: <Warehouse className="w-8 h-8" />,
      title: "Warehousing",
      description: "Secure storage facilities in Yiwu with inventory management and consolidation services."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Control",
      description: "Comprehensive quality inspection and testing to ensure product standards."
    },
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Shipping",
      description: "Global shipping solutions to Africa, Asia, North America, South America, Europe, and Australia."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Documentation",
      description: "Complete shipping documentation, customs clearance, and regulatory compliance."
    }
  ]

  const regions = [
    { name: "Africa", flag: "🌍" },
    { name: "Asia", flag: "🌏" },
    { name: "North America", flag: "🌎" },
    { name: "South America", flag: "🌎" },
    { name: "Europe", flag: "🌍" },
    { name: "Australia", flag: "🌏" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Ship className="w-10 h-10 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Marvel In Company Limited</h1>
                <p className="text-sm text-gray-600">Global Shipping Solutions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>12+ Years</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>1000+ Clients</span>
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Connecting China to the World
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            With over 12 years of experience and 1000+ satisfied clients, we provide comprehensive 
            shipping solutions from China to every corner of the globe.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {regions.map((region, index) => (
              <Badge key={index} variant="outline" className="text-lg py-2 px-4">
                <span className="mr-2">{region.flag}</span>
                {region.name}
              </Badge>
            ))}
          </div>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Quote
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600">End-to-end solutions for your global shipping needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-600">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h3>
              <div className="space-y-8">
                {/* China Office */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>China Office - Yiwu</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <span>+86 189 6938 5282</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Call</Badge>
                      <Badge variant="outline">WhatsApp</Badge>
                      <Badge variant="outline">WeChat</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Dubai Office */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>UAE Office - Dubai</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <span>+971 55 134 6771</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Call</Badge>
                      <Badge variant="outline">WhatsApp</Badge>
                      <Badge variant="outline">WeChat</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="bg-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-blue-600" />
                      <span>Why Choose Marvel?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>12+ years of experience</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>1000+ satisfied clients</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Global shipping network</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Quality assurance</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    <span>Get a Quote</span>
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="service">Service Needed</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="sourcing">Sourcing</option>
                        <option value="purchasing">Purchasing</option>
                        <option value="warehousing">Warehousing</option>
                        <option value="quality-control">Quality Control</option>
                        <option value="shipping">Shipping</option>
                        <option value="documentation">Documentation</option>
                        <option value="full-service">Full Service Package</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your shipping requirements..."
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Ship className="w-8 h-8 text-blue-400" />
                <h4 className="text-xl font-bold">Marvel In Company Limited</h4>
              </div>
              <p className="text-gray-400">
                Your trusted partner for global shipping solutions from China to the world.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Sourcing & Purchasing</li>
                <li>Warehousing</li>
                <li>Quality Control</li>
                <li>Global Shipping</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact</h5>
              <div className="space-y-2 text-gray-400">
                <p>China: +86 189 6938 5282</p>
                <p>Dubai: +971 55 134 6771</p>
                <p>Available on WhatsApp & WeChat</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Marval In Company Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
