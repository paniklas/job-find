export async function sendTypedEmail({ email_type, language, recipient_list, template_data }) {
    try {
        const response = await fetch(`${process.env.EMAIL_SERVICE_URL}/send-typed-email/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': process.env.EMAIL_API_KEY,
            },
            body: JSON.stringify({
                email_type,
                language,
                recipient_list,
                template_data
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Email service error: ${errorData.message || 'Unknown error'}`);
        }

        const result = await response.json();
        console.log(`✅ ${email_type} email queued successfully`);
        return result;

    } catch (error) {
        console.error(`❌ Failed to send ${email_type} email:`, error);
        throw error;
    }
}