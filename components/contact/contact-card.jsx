import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ContactCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@jobfinder.com</span>
                </div>
                <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Job Street, Career City, 90210</span>
                </div>
            </CardContent>
        </Card>
    )
}

export default ContactCard