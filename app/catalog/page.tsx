// import { Header } from "@/components/layout/header"
// import { Footer } from "@/components/layout/footer"
// import { Card, CardContent, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"

// export default function CatalogPage() {
//   const categories = [
//     {
//       name: "Flexible Laminated Tubes",
//       description: "High-quality tubes for cosmetics, pharmaceuticals, and food products",
//       image: "/placeholder.svg?height=300&width=400",
//       products: ["Cosmetic Tubes", "Pharma Tubes", "Food Grade Tubes", "Industrial Tubes"],
//     },
//     {
//       name: "Printed Labels",
//       description: "Custom-designed labels with high-resolution printing",
//       image: "/placeholder.svg?height=300&width=400",
//       products: ["Product Labels", "Branding Labels", "Barcode Labels", "Security Labels"],
//     },
//     {
//       name: "Custom Packaging",
//       description: "Tailored packaging solutions for unique requirements",
//       image: "/placeholder.svg?height=300&width=400",
//       products: ["Boxes", "Pouches", "Containers", "Specialty Packaging"],
//     },
//     {
//       name: "Sustainable Solutions",
//       description: "Eco-friendly packaging options for environmentally conscious brands",
//       image: "/placeholder.svg?height=300&width=400",
//       products: ["Biodegradable Tubes", "Recyclable Labels", "Eco Pouches", "Green Packaging"],
//     },
//   ]

//   return (
//     <div className="flex flex-col min-h-screen bg-white text-primary">
//       <Header />
//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white px-4 md:px-6">
//           <div className="container text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               Product <span className="text-accent">Catalog</span>
//             </h1>
//             <p className="text-xl md:text-2xl max-w-3xl mx-auto">
//               Explore our comprehensive range of packaging solutions designed to meet your specific needs
//             </p>
//           </div>
//         </section>

//         {/* Product Categories */}
//         <section className="py-16 md:py-24 bg-white px-4 md:px-6">
//           <div className="container">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//               {categories.map((category, index) => (
//                 <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//                   <div className="relative h-64 w-full">
//                     <Image
//                       src={category.image || "/placeholder.svg"}
//                       alt={category.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <CardContent className="p-6">
//                     <CardTitle className="text-2xl font-bold text-primary mb-3">{category.name}</CardTitle>
//                     <p className="text-gray-700 mb-4">{category.description}</p>
//                     <div className="mb-4">
//                       <h4 className="font-semibold text-primary mb-2">Available Products:</h4>
//                       <ul className="grid grid-cols-2 gap-2">
//                         {category.products.map((product, idx) => (
//                           <li key={idx} className="text-sm text-gray-600 flex items-center">
//                             <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
//                             {product}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <Button className="w-full bg-primary hover:bg-primary/90 text-white">View Details</Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-6">
//           <div className="container text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
//               Need a Custom <span className="text-accent">Solution</span>?
//             </h2>
//             <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
//               Can't find exactly what you're looking for? Our team specializes in creating custom packaging solutions
//               tailored to your specific requirements.
//             </p>
//             <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-3">
//               Request Custom Quote
//             </Button>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   )
// }


import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CatalogPage() {
  const categories = [
    {
      name: "Flexible Laminated Tubes",
      description: "High-quality tubes for cosmetics, pharmaceuticals, and food products",
      image: "/placeholder.svg?height=300&width=400",
      products: ["Cosmetic Tubes", "Pharma Tubes", "Food Grade Tubes", "Industrial Tubes"],
    },
    {
      name: "Printed Labels",
      description: "Custom-designed labels with high-resolution printing",
      image: "/placeholder.svg?height=300&width=400",
      products: ["Product Labels", "Branding Labels", "Barcode Labels", "Security Labels"],
    },
    {
      name: "Custom Packaging",
      description: "Tailored packaging solutions for unique requirements",
      image: "/placeholder.svg?height=300&width=400",
      products: ["Boxes", "Pouches", "Containers", "Specialty Packaging"],
    },
    {
      name: "Sustainable Solutions",
      description: "Eco-friendly packaging options for environmentally conscious brands",
      image: "/placeholder.svg?height=300&width=400",
      products: ["Biodegradable Tubes", "Recyclable Labels", "Eco Pouches", "Green Packaging"],
    },
  ]

  const laminatedTubes = [
    {
      diameter: "19mm",
      length: "Customizable",
      capacity: "As required",
      materials: "ABL/PBL",
      printing: "Flexo",
      capTypes: "Screw cap, Push fit cap, Flip-top Cap, etc. Open to customization",
      oval: "No"
    },
    {
      diameter: "22mm",
      length: "Customizable",
      capacity: "As required",
      materials: "ABL/PBL",
      printing: "Flexo",
      capTypes: "Screw cap, Push fit cap, Flip-top Cap, etc. Open to customization",
      oval: "Yes"
    },
    {
      diameter: "25mm",
      length: "Customizable",
      capacity: "As required",
      materials: "ABL/PBL",
      printing: "Flexo",
      capTypes: "Screw cap, Push fit cap, Flip-top Cap, etc. Open to customization",
      oval: "No"
    },
    {
      diameter: "30mm",
      length: "Customizable",
      capacity: "As required",
      materials: "ABL/PBL",
      printing: "Flexo",
      capTypes: "Screw cap, Push fit cap, Flip-top Cap, etc. Open to customization",
      oval: "Yes"
    },
    {
      diameter: "35mm",
      length: "Customizable",
      capacity: "As required",
      materials: "ABL/PBL",
      printing: "Flexo",
      capTypes: "Screw cap, Push fit cap, Flip-top Cap, etc. Open to customization",
      oval: "No"
    }
  ]

  const labelOptions = {
    materials: "Paper, Film / Synthetic, Specialty & Premium Labels (Foil, Clear, Shrink Sleeves, etc.), etc.",
    printing: "Flexo with 8 color option",
    finish: "Gloss / Semi-gloss / Matte / Satin / Textured / Metalized",
    size: "Customizable"
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-primary">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white px-4 md:px-6">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Product <span className="text-accent">Catalog</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Explore our comprehensive range of packaging solutions designed to meet your specific needs
            </p>
          </div>
        </section>

        {/* Laminated Tubes Section */}
        <section className="py-16 md:py-20 bg-white px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Laminated <span className="text-accent">Tubes</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-center text-gray-700 italic">
                Note: All tubes include a tamper-evident top seal with tab for effortless peel-off
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-3 border border-gray-300">Diameter</th>
                    <th className="p-3 border border-gray-300">Length Range</th>
                    <th className="p-3 border border-gray-300">Capacity</th>
                    <th className="p-3 border border-gray-300">Materials</th>
                    <th className="p-3 border border-gray-300">Printing</th>
                    <th className="p-3 border border-gray-300">Cap Types</th>
                    <th className="p-3 border border-gray-300">Available in Oval</th>
                  </tr>
                </thead>
                <tbody>
                  {laminatedTubes.map((tube, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-300 text-center">{tube.diameter}</td>
                      <td className="p-3 border border-gray-300 text-center">{tube.length}</td>
                      <td className="p-3 border border-gray-300 text-center">{tube.capacity}</td>
                      <td className="p-3 border border-gray-300 text-center">{tube.materials}</td>
                      <td className="p-3 border border-gray-300 text-center">{tube.printing}</td>
                      <td className="p-3 border border-gray-300 text-center">{tube.capTypes}</td>
                      <td className="p-3 border border-gray-300 text-center">{tube.oval}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Labels Section */}
        <section className="py-16 md:py-20 bg-gray-50 px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Label <span className="text-accent">Options</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">Material Types</h3>
                <p className="text-gray-700">{labelOptions.materials}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">Printing</h3>
                <p className="text-gray-700">{labelOptions.printing}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">Finish</h3>
                <p className="text-gray-700">{labelOptions.finish}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">Size Range</h3>
                <p className="text-gray-700">{labelOptions.size}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 md:py-24 bg-white px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Our Product <span className="text-accent">Categories</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {categories.map((category, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64 w-full">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="text-2xl font-bold text-primary mb-3">{category.name}</CardTitle>
                    <p className="text-gray-700 mb-4">{category.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-primary mb-2">Available Products:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {category.products.map((product, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-6">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Need a Custom <span className="text-accent">Solution</span>?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Can't find exactly what you're looking for? Our team specializes in creating custom packaging solutions
              tailored to your specific requirements.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-3">
              Request Custom Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}