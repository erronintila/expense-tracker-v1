<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="./resources/js/assets/img/login.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Employee Expense Tracking System</h3>

  <p align="center">
    A web-based application that manages travel-related expenses of employees. It allows users to record, submit, track, process, and reimburse employee expenses. The system used to improve and streamline current process, data management and increase response time. 
  </p>
</p>

### Common Features
The main purpose of the system is to facilitate the entry, accumulation, processing, and management of travel-related expenses and employee reimbursement and improve efficiency, accuracy and management by reducing manual operations. The system performs a range of functionalities including:
#### Record Keeping
The system is used in storing data to keep accurate records. Usual data that comprise overall transaction include employee information, vendors, expenses, and payment records. Recording of expenses starts from encoding complete details of an employee and vendor, and then records payment once these expenses have been grouped together into one report. The system provides easy record retrieval and transaction history that can be utilized to process and analyze the data associated with it.
#### Workflow Management
The system can be used to streamline the current process or workflow. From encoding expenses to submitting of expense report, the system can reduce the amount of time needed to generate reports and increase reimbursement process.
#### Reporting
The Employee Expense Tracking System provides an accurate data visualization for reporting and analysis. The system can generate summary of expense reports as well as overall expenses of the company. In addition, the system provides information of remaining revolving fund on each employee.

### Built With
- Laravel
- Vue.js
- Vuetify.js

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites
* XAMPP <br />
  Go to <a href="https://www.apachefriends.org/download.html">this link</a> to download and install the file.<br/>

* Node.js <br/>
  Go to <a href="https://nodejs.org/en/">https://nodejs.org/en/</a> and download the file. <br/>
  Open the downloaded file and install.<br/>
  
* Composer <br/>
  Go to <a href="https://getcomposer.org/download/">this link</a> and follow installation process or install through command line:
  ```
  php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
  php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
  php composer-setup.php
  php -r "unlink('composer-setup.php');"
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/erronintila/expense-tracker-v1.git
   ```
2. Install NPM packages
   ```
   npm install
   npm run dev
   ```
3. Install Composer packages
   ```
   composer install
   ```
4. Create the .env file. Then open the file to edit application and database configuration.
   ```
   cp .env.example .env
   ```
5. Generate the key for the application
   ```
   php artisan key:generate
   ```
6. Set default data
   ```
   php artisan migrate:fresh --seed
   ```

Note: Default account (username: 'superadmin', password: 'password')

<!-- CONTACT -->
## Contact

<a href="https://mail.google.com/a?view=cm&fs=1&to=erronintila@gmail.com" target="_blank">![Google Mail](https://img.shields.io/badge/Gmail-D14836?style=flat-square&logo=gmail&logoColor=white)</a>
<a href="https://twitter.com/eronintilla" target="_blank">![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=flat-square&logo=twitter&logoColor=white)</a>

Project Link: [https://github.com/erronintila/expense-tracker-v1.git](https://github.com/erronintila/expense-tracker-v1.git)

<!--
*** This is a comment
*** 
-->

