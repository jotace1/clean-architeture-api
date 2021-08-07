export const validationError = (details: any): any => {
  return {
    code: 'val-001',
    message: 'Validation Error',
    shortMessage: 'validationError',
    details
  }
}

export const validationErrorIntegration = (details: object, api: string): any => {
  return {
    code: 'val-002',
    message: 'Validation Error Integration',
    shortMessage: 'validationErrorIntegration',
    api,
    details
  }
}
