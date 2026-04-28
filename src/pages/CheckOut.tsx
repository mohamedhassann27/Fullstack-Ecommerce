'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, CreditCard, Eye, EyeOff, Gift, Lock, Shield, Truck } from 'lucide-react'
import { useSelector } from 'react-redux'
import type { IProduct } from '@/interfaces'
import type { RootState } from '@/app/store'

function Checkout() {
  const [step, setStep] = useState(1)
  const [showCvv, setShowCvv] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Information
    email: '',
    firstName: '',
    lastName: '',
    phone: '',

    // Shipping Address
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',

    // Payment
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',

    // Options
    saveInfo: false,
    sameAsBilling: true,
    newsletter: false,
    promoCode: '',
  })

const orderProducts= useSelector((state:RootState)=> state.cart)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCardNumberChange = (value: string) => {
    // Format card number with spaces
    const formatted = value
      .replace(/\s/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim()
    handleInputChange('cardNumber', formatted)
  }

  const handleExpiryChange = (value: string) => {
    // Format expiry as MM/YY
    const formatted = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2')
    handleInputChange('expiryDate', formatted)
  }

  const subtotal = orderProducts.reduce((sum, item) => sum + item.price * item.quantity, 0)
  // const total = subtotal + orderProducts.shipping + orderProducts.tax - orderProducts.discount - orderProducts.promoDiscount

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  return (
    <div>
      <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6'>
        {/* Header */}
        <div className='mb-4 text-center'>
          <h1 className='text-3xl font-bold text-balance'>Secure Checkout</h1>
          {/* <p className='text-muted-foreground'>Complete your purchase in just a few steps</p> */}
        </div>

        {/* Progress Indicator */}
        <div className='mb-8 flex justify-center'>
          <div className='flex items-center gap-4'>
            {[1, 2, 3].map(stepNumber => (
              <div key={stepNumber} className='flex items-center'>
                <div
                  className={`flex size-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                    stepNumber <= step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 ? (
                  <div
                    className={`mx-4 h-1 w-16 rounded transition-colors ${
                      stepNumber < step ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className='grid gap-8 lg:grid-cols-3'>
          {/* Main Form */}
          <div className='lg:col-span-2'>
            <Card>
              <CardHeader>
                <CardTitle className='text-balance'>
                  {step === 1 && 'Contact Information'}
                  {step === 2 && 'Shipping Address'}
                  {step === 3 && 'Payment Details'}
                </CardTitle>
                <CardDescription>
                  {step === 1 && "We'll use this to send you order updates"}
                  {step === 2 && 'Where should we deliver your order?'}
                  {step === 3 && 'Your payment information is secure and encrypted'}
                </CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-6'>
                {/* Step 1: Contact Information */}
                {step === 1 ? (
                  <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                      <Label htmlFor='email-kL9x23P'>Email address</Label>
                      <Input
                        id='email-kL9x23P'
                        type='email'
                        placeholder='john@example.com'
                        value={formData.email}
                        onChange={e => handleInputChange('email', e.target.value)}
                        className='h-9'
                      />
                    </div>

                    <div className='grid gap-4 md:grid-cols-2'>
                      <div className='flex flex-col gap-2'>
                        <Label htmlFor='firstName-mN7z84Q'>First name</Label>
                        <Input
                          id='firstName-mN7z84Q'
                          placeholder='John'
                          value={formData.firstName}
                          onChange={e => handleInputChange('firstName', e.target.value)}
                          className='h-9'
                        />
                      </div>
                      <div className='flex flex-col gap-2'>
                        <Label htmlFor='lastName-pL8w45T'>Last name</Label>
                        <Input
                          id='lastName-pL8w45T'
                          placeholder='Doe'
                          value={formData.lastName}
                          onChange={e => handleInputChange('lastName', e.target.value)}
                          className='h-9'
                        />
                      </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                      <Label htmlFor='phone-rM6n82S'>Phone number (optional)</Label>
                      <Input
                        id='phone-rM6n82S'
                        type='tel'
                        placeholder='+1 (555) 123-4567'
                        value={formData.phone}
                        onChange={e => handleInputChange('phone', e.target.value)}
                        className='h-9'
                      />
                    </div>
                  </div>
                ) : null}

                {/* Step 2: Shipping Address */}
                {step === 2 ? (
                  <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                      <Label htmlFor='address-qP4z17X'>Street address</Label>
                      <Input
                        id='address-qP4z17X'
                        placeholder='123 Main Street'
                        value={formData.address}
                        onChange={e => handleInputChange('address', e.target.value)}
                        className='h-9'
                      />
                    </div>

                    <div className='grid gap-4 md:grid-cols-2'>
                      <div className='flex flex-col gap-2'>
                        <Label htmlFor='city-sT5y91B'>City</Label>
                        <Input
                          id='city-sT5y91B'
                          placeholder='New York'
                          value={formData.city}
                          onChange={e => handleInputChange('city', e.target.value)}
                          className='h-9'
                        />
                      </div>
                      <div className='flex flex-col gap-2'>
                        <Label htmlFor='state-wX3k85M'>State</Label>
                        <Input
                          id='state-wX3k85M'
                          placeholder='NY'
                          value={formData.state}
                          onChange={e => handleInputChange('state', e.target.value)}
                          className='h-9'
                        />
                      </div>
                    </div>

                    <div className='grid gap-4 md:grid-cols-2'>
                      <div className='flex flex-col gap-2'>
                        <Label htmlFor='zipCode-vZ9q46N'>ZIP code</Label>
                        <Input
                          id='zipCode-vZ9q46N'
                          placeholder='10001'
                          value={formData.zipCode}
                          onChange={e => handleInputChange('zipCode', e.target.value)}
                          className='h-9'
                        />
                      </div>
                      <div className='flex flex-col gap-2'>
                        <Label htmlFor='country-bH7l52P'>Country</Label>
                        <Select value={formData.country} onValueChange={value => handleInputChange('country', value)}>
                          <SelectTrigger id='country-bH7l52P' className='mt-2 py-3 h-9! w-full'>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value='US'>Palastine</SelectItem>
                            <SelectItem value='EG'>Egypt</SelectItem>
                            <SelectItem value='CA'>Canada</SelectItem>
                            <SelectItem value='AU'>Australia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Step 3: Payment */}
                {step === 3 ? (
                  <div className='flex flex-col gap-6'>
                    {/* Payment Method */}
                    <div className='flex flex-col gap-4'>
                      <Label className='text-sm font-medium'>Payment method</Label>
                      <RadioGroup defaultValue='card' className='flex flex-col gap-3'>
                        <div className='flex items-center gap-3 rounded-lg border p-4'>
                          <RadioGroupItem value='card' id='card-payment-cN9m74K' />
                          <CreditCard className='text-muted-foreground size-5' />
                          <Label htmlFor='card-payment-cN9m74K' className='flex-1 cursor-pointer'>
                            Credit or debit card
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Card Details */}
                    <div className='flex flex-col gap-4'>
                      <div className='flex flex-col gap-2'>
                        <Label htmlFor='cardNumber-dK5p83L'>Card number</Label>
                        <Input
                          id='cardNumber-dK5p83L'
                          placeholder='1234 5678 9012 3456'
                          value={formData.cardNumber}
                          onChange={e => handleCardNumberChange(e.target.value)}
                          maxLength={19}
                          className='h-9'
                        />
                      </div>

                      <div className='grid gap-4 md:grid-cols-3'>
                        <div className='flex flex-col gap-2'>
                          <Label htmlFor='expiryDate-fJ6r29M'>Expiry</Label>
                          <Input
                            id='expiryDate-fJ6r29M'
                            placeholder='MM/YY'
                            value={formData.expiryDate}
                            onChange={e => handleExpiryChange(e.target.value)}
                            maxLength={5}
                            className='h-9'
                          />
                        </div>
                        <div className='flex flex-col gap-2'>
                          <Label htmlFor='cvv-gH8s34N'>CVV</Label>
                          <div className='relative'>
                            <Input
                              id='cvv-gH8s34N'
                              type={showCvv ? 'text' : 'password'}
                              placeholder='123'
                              value={formData.cvv}
                              onChange={e => handleInputChange('cvv', e.target.value)}
                              maxLength={4}
                              className='h-9 pe-10'
                            />
                            <Button
                              type='button'
                              variant='ghost'
                              size='icon'
                              className="h-9 w-9 absolute inset-e-0 top-1/2  -translate-y-1/2 cursor-pointer hover:bg-transparent"
                              onClick={() => setShowCvv(!showCvv)}
                            >
                              {showCvv ? (
                                <EyeOff className='text-muted-foreground size-4' />
                              ) : (
                                <Eye className='text-muted-foreground size-4' />
                              )}
                            </Button>
                          </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <Label htmlFor='cardName-hI9t45O'>Name on card</Label>
                          <Input
                            id='cardName-hI9t45O'
                            placeholder='John Doe'
                            value={formData.cardName}
                            onChange={e => handleInputChange('cardName', e.target.value)}
                            className='h-9'
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Options */}
                    <div className='flex flex-col gap-4'>
                      <div className='flex items-center gap-2'>
                        <Checkbox
                          id='saveInfo-jK0u56P'
                          checked={formData.saveInfo}
                          onCheckedChange={checked => handleInputChange('saveInfo', checked as boolean)}
                        />
                        <Label htmlFor='saveInfo-jK0u56P' className='text-sm'>
                          Save payment information for future purchases
                        </Label>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Navigation Buttons */}
                <div className='flex justify-between pt-3'>
                  <Button
                    type='button'
                    variant='outline'
                    onClick={prevStep}
                    disabled={step === 1}
                    className="h-9 px-4 py-2 flex cursor-pointer items-center gap-2"
                  >
                    <ArrowLeft className='size-4' />
                    Back
                  </Button>

                  {step < 3 ? (
                    <Button onClick={nextStep} className="h-9 px-4 py-2 cursor-pointer">
                      Continue
                    </Button>
                  ) : (
                    <Button className="h-9 px-4 py-2 flex cursor-pointer items-center gap-2">
                      <Lock className='size-4' />
                      Complete Order
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className='lg:col-span-1'>
            <Card className='sticky top-8'>
              <CardHeader>
                <CardTitle className='text-balance'>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className='flex flex-col gap-4'>
                {/* Items */}
                <div className='flex flex-col gap-4'>
                  {orderProducts.map((item:IProduct) => (
                    <div key={item.id} className='flex gap-4'>
                      <div className='relative'>
                        <img src={item.thumbnail} alt={item.title} className='size-16 rounded-lg object-cover' />
                        <Badge variant='secondary' className="px-2.5 py-0.5 font-semibold absolute -inset-e-2 -top-2 size-6 rounded-full p-0 text-xs">
                          {item.quantity}
                        </Badge>
                      </div>
                      <div className='min-w-0 flex-1'>
                        <h4 className='truncate text-sm font-medium mt-2'>{item.title}</h4>
                        {/* <p className='text-muted-foreground text-xs'>{item.variant}</p> */}
                        <p className='mt-1 text-sm font-medium'>${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Promo Code */}
                <div className='flex flex-col gap-2'>
                  <Label htmlFor='promoCode-kL1m67Q' className='text-sm'>
                    Promo code
                  </Label>
                  <div className='flex gap-2'>
                    <Input
                      id='promoCode-kL1m67Q'
                      placeholder='Enter code'
                      value={formData.promoCode}
                      className='h-9'
                      onChange={e => handleInputChange('promoCode', e.target.value)}
                    />
                    <Button variant='outline' className="h-9 px-4 py-2 cursor-pointer">
                      Apply
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Pricing Breakdown */}
                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between text-sm'>
                    <span className='text-muted-foreground'>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <span className='text-muted-foreground flex items-center gap-1'>
                      <Truck className='size-3' />
                      Shipping
                    </span>
                    <span>Free</span>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <span className='text-muted-foreground'>Tax</span>
                    <span>$0,00</span>
                  </div>
                  {/* {orderProducts.promoDiscount > 0 ? (
                    <div className='flex justify-between text-sm text-green-600'>
                      <span className='flex items-center gap-1'>
                        <Tag className='size-3' />
                        Promo discount
                      </span>
                      <span>-${orderProducts.promoDiscount.toFixed(2)}</span>
                    </div>
                  ) : null} */}
                </div>

                <Separator />

                <div className='flex justify-between font-semibold'>
                  <span>Total</span>
                  <span>${subtotal}</span>
                </div>

                {/* Trust Indicators */}
                <div className='flex flex-col gap-3 pt-4'>
                  <div className='text-muted-foreground flex items-center gap-2 text-xs'>
                    <Shield className='size-4 text-green-600' />
                    <span>SSL encrypted checkout</span>
                  </div>
                  <div className='text-muted-foreground flex items-center gap-2 text-xs'>
                    <Truck className='size-4 text-blue-600' />
                    <span>Free shipping on orders over $75</span>
                  </div>
                  <div className='text-muted-foreground flex items-center gap-2 text-xs'>
                    <Gift className='size-4 text-purple-600' />
                    <span>30-day return policy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout