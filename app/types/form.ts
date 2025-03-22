export interface FormField {
    id: string
    type: string
    label: string
    placeholder?: string
    required: boolean
    helpText?: string
    options?: string[]
    validation?: {
      min?: number
      max?: number
    }
    conditional?: {
      field: string
      value: string
    }
  }
  
  export interface ButtonCustomization {
    text: string
    variant: string
    size: string
    fullWidth: boolean
    rounded: boolean
    position: string
  }
  
  export interface Appearance {
    backgroundType: string
    backgroundColor?: string
    inputStyle: string
  }
  
  export interface Settings {
    successMessage: string
    enableCaptcha: boolean
    storeResponses: boolean
    allowMultipleSubmissions: boolean
  }
  
  export interface FormConfig {
    id: string
    title: string
    description: string
    coverImage?: string
    fields: FormField[]
    audienceId: string | null
    buttonCustomization: ButtonCustomization
    appearance: Appearance
    settings: Settings
    published: boolean
    category: string
    featured?: boolean
    createdAt: string
    complexity: "simple" | "medium" | "advanced"
  }
  
  