import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
    return (
        // <section>
        <div data-aos="fade-up" data-aos-duration="600" className='mx-auto py-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
            {/* <div data-aos="fade-up" className='mb-2 text-center'>
                <h2 className='mb-3 text-2xl font-bold text-balance md:text-2xl'>Get in Touch</h2>
                <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
                Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as
                soon as possible.
                </p>
            </div> */}


            <div className='grid gap-6 lg:grid-cols-2 lg:items-stretch'>
                 {/* Contact Information & Additional Info */}
                <div data-aos="fade-right" className='flex h-full flex-col gap-6'>
                    {/* Contact Information */}
                    <Card data-aos="fade-up" data-aos-delay="50" className='flex-1 gap-3 py-6'>
                    <CardHeader className='px-6'>
                        <CardTitle className='text-lg text-balance'>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-4 px-6'>
                        <div data-aos="fade-up" data-aos-delay="100" className='flex items-center gap-3'>
                            <div className='bg-primary/10 flex size-8 items-center justify-center rounded-full'>
                                <Mail className='text-primary size-4' />
                            </div>
                            <div>
                                <h4 className='text-sm font-medium'>Email</h4>
                                <p className='text-muted-foreground text-xs'>mohamed@company.com</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="150" className='flex items-center gap-3'>
                            <div className='bg-primary/10 flex size-8 items-center justify-center rounded-full'>
                                <Phone className='text-primary size-4' />
                            </div>
                            <div>
                                <h4 className='text-sm font-medium'>Phone</h4>
                                <p className='text-muted-foreground text-xs'>+201278256598</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200" className='flex items-start gap-3'>
                            <div className='bg-primary/10 mt-0.5 flex size-8 items-center justify-center rounded-full'>
                                <MapPin className='text-primary size-4' />
                            </div>
                            <div>
                                <h4 className='text-sm font-medium'>Office</h4>
                                <p className='text-muted-foreground text-xs'>
                                123 Business Ave, Suite 100
                                <br />
                                Zagazig
                                </p>
                            </div>
                        </div>
                    </CardContent>
                    </Card>

                    {/* Business Hours */}
                    <Card data-aos="fade-up" data-aos-delay="100" className='gap-3 py-6'>
                    <CardHeader className='px-6'>
                        <CardTitle className='text-lg text-balance'>Business Hours</CardTitle>
                    </CardHeader>
                    <CardContent className='px-6'>
                        <div className='flex flex-col gap-2 text-sm'>
                        <div className='flex justify-between'>
                            <span>Sunday - Thursday</span>
                            <span className='text-muted-foreground'>10:00 AM - 11:00 PM</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Saturday</span>
                            <span className='text-muted-foreground'>9:00 AM - 7:00 PM</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Friday</span>
                            <span className='text-muted-foreground'>Closed</span>
                        </div>
                        </div>
                    </CardContent>
                    </Card>

                    {/* Alternative Contact */}
                    <Card data-aos="fade-up" data-aos-delay="150" className='gap-3 py-6'>
                    <CardHeader className='px-6'>
                        <CardTitle className='text-lg text-balance'>Prefer to Call?</CardTitle>
                    </CardHeader>
                    <CardContent className='px-6'>
                        <p className='text-muted-foreground mb-3 text-sm'>
                        Speak directly with our team for immediate assistance.
                        </p>
                        <Button variant='outline' className="h-9 px-4 py-6 w-full cursor-pointer">
                        <Phone />
                        Schedule a Call
                        </Button>
                    </CardContent>
                    </Card>
                </div>

            {/* Contact Form */}
            <Card data-aos="fade-left" className='h-full py-6'>
                <CardHeader className='px-6'>
                <CardTitle className='text-balance'>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col gap-6 px-6'>
                <FieldGroup data-aos="fade-up" data-aos-delay="100">
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <Field>
                        <FieldLabel htmlFor='first-name-aB3x9'>First name</FieldLabel>
                        <Input id='first-name-aB3x9' placeholder='John' className='h-9' />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor='last-name-cD4y8'>Last name</FieldLabel>
                        <Input id='last-name-cD4y8' placeholder='Doe' className='h-9' />
                    </Field>
                    </div>
                    <Field>
                    <FieldLabel htmlFor='email-eF5z7'>Email</FieldLabel>
                    <Input id='email-eF5z7' type='email' placeholder='john@example.com' className='h-9' />
                    </Field>
                    <Field>
                    <FieldLabel htmlFor='subject-gH6w6'>Subject</FieldLabel>
                    <Input id='subject-gH6w6' placeholder='How can we help?' className='h-9' />
                    </Field>
                    <Field>
                    <FieldLabel htmlFor='message-iJ7v5'>Message</FieldLabel>
                    <Textarea
                        id='message-iJ7v5'
                        placeholder='Tell us more about your project...'
                        className='min-h-30'
                    />
                    </Field>
                </FieldGroup>
                <Button className="h-9 px-4 py-6 w-full cursor-pointer">Send Message</Button>
                </CardContent>
            </Card>
            </div>
        </div>
        // </section>
    )
}
