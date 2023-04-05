class HealthDeclaration {
  get noHealthIssue() {
    return $(
      '//android.widget.TextView[@text="Yes, I verify that I have no health conditions"]'
    )
  }

  async doHealthDeclaration() {
    await driver.scrollAndClick(this.noHealthIssue)
  }
}

export const healthDeclaration = new HealthDeclaration()
