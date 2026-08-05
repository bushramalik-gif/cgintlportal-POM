import { Page, Locator } from '@playwright/test';

export class SidebarPage {
  readonly page: Page;
  readonly dashboardLink: Locator;
  readonly institutesMenu: Locator;
  readonly institutesSubLink: Locator;
  readonly academicsLink: Locator;
  readonly studentsLink: Locator;
  readonly supportTicketsLink: Locator;
  readonly sendNotificationLink: Locator;
  readonly sendNewNotificationLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardLink = page.getByRole('link', { name: ' Dashboard' });
    this.institutesMenu = page.getByRole('link', { name: ' Institutes ' });
    this.institutesSubLink = page.getByRole('link', { name: 'Institutes', exact: true });
    this.academicsLink = page.getByRole('link', { name: ' Academics ' });
    this.studentsLink = page.getByRole('link', { name: 'Students' });
    this.supportTicketsLink = page.getByRole('link', { name: ' Support Tickets' });
    this.sendNotificationLink = page.getByRole('link', { name: ' Send Notification' });
    this.sendNewNotificationLink = page.getByRole('link', { name: ' Send New Notification' });
  }

async goToDashboard() {
  const classAttr = await this.dashboardLink.getAttribute('class');
  const isAlreadyActive = classAttr?.includes('active');

  if (!isAlreadyActive) {
    await this.dashboardLink.click();
  }
}

  async goToInstitutes() {
    await this.institutesMenu.click();
    await this.institutesSubLink.waitFor({ state: 'visible' });
    await this.institutesSubLink.click();
  }

  async goToAcademics() {
    await this.academicsLink.click();
  }

  async goToStudents() {
    await this.studentsLink.click();
  }

  async goToSupportTickets() {
    await this.supportTicketsLink.click();
  }

  async goToSendNotification() {
    await this.sendNotificationLink.click();
  }

  async goToSendNewNotification() {
    await this.sendNewNotificationLink.click();
  }
}