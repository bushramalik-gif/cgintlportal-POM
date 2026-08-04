import { test } from '@playwright/test';
import 'dotenv/config';
import { LoginPage } from '../pages/LoginPage';
import { SidebarPage } from '../pages/SidebarPage';

test('Full navigation flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const sidebar = new SidebarPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);

  await sidebar.goToDashboard();
  await sidebar.goToInstitutes();
  await sidebar.goToAcademics();
  await sidebar.goToStudents();
  await sidebar.goToSupportTickets();
  await sidebar.goToSendNotification();
  await sidebar.goToSendNewNotification();
});