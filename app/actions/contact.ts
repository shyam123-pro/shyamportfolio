"use server"

export async function sendContactMessage(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Simulate sending email (in a real app, you'd use a service like Resend, SendGrid, etc.)
  try {
    // Here you would integrate with an email service
    // For now, we'll simulate the process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      to: "shyamsundartyagi633@gmail.com",
    })

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again.",
    }
  }
}
