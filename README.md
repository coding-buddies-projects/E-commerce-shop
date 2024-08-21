# E-commerce-shop

0. - [ :clock5: ] - **means task was taken and still not completed;**
0. - [x] **means the task was competed;**


***Edit the file to take a task:***
<br/>
If you take a task write your name/nickname in [], and add the link to your github in (). Also add this emoji :clock5:.
<br/>
<br/>
If the task was completed write "x" in [] instead of emoji.
<br/>
Example:
<br/>
1. - [ :clock5: ] Set up the initial React project structure - [Alex](https://github.com/aleksandramuraveva)
1. - [x] Set up the initial React project structure - [Alex](https://github.com/aleksandramuraveva)

# E-commerce-shop Project Tasks
 Add your own tasks if necessary
 <br/>
 Router will be implemented later in order not to confuse anyone

1. - [x] Set up initial structure - [Alex](https://github.com/aleksandramuraveva)
1. - [ ] Add global css styles, according to figama design - []()
1. - [ ] Create SignupPopup component logic - []()
1. - [ ] Style SignupPopup component using CSS - []()
1. - [ ] Create Navbar component logic - []()
1. - [ ] Style Navbar component using CSS - []()
1. - [ :clock5: ] Create Section component logic - [Alex](https://github.com/aleksandramuraveva)
1. - [ :clock5: ] Style Section component using CSS - [Alex](https://github.com/aleksandramuraveva)
1. - [ :clock5: ] Create CardGrid component logic - [Alex](https://github.com/aleksandramuraveva)
1. - [ :clock5: ] Style CardGrid component using CSS - [Alex](https://github.com/aleksandramuraveva)
1. - [ :clock5: ] Create Card component logic - [Alex](https://github.com/aleksandramuraveva)
1. - [ :clock5: ] Style Card component using CSS - [Alex](https://github.com/aleksandramuraveva)
1. - [ ] Create ReviewCard component logic - []()
1. - [ ] Style ReviewCard component using CSS - []()
1. - [ ] Create NewsletterSubscription component logic - []()
1. - [ ] Style NewsletterSubscription component using CSS - []()
1. - [ ] Create Footer component logic - []()
1. - [ ] Style Footer component using CSS - []()
1. - [ ] Implement ThemeContext and ThemeProvider - []()
1. - [ ] Create Home page logic - []()
1. - [ ] Style Home page using CSS - []()
1. - [ ] Create Header component logic for Home page - []()
1. - [ ] Style Header component using CSS - []()
1. - [ :clock5: ] Create NewArrivals component logic - [Alex](https://github.com/aleksandramuraveva)
1. - [ ] Style NewArrivals component using CSS - []()
1. - [ :clock5: ] Create TopSelling component logic - [Alex](https://github.com/aleksandramuraveva)
1. - [ ] Style TopSelling component using CSS - []()
1. - [ ] Create BrowseByStyle component logic - []()
1. - [ ] Style BrowseByStyle component using CSS - []()
1. - [ ] Create HomeReviews component logic - []()
1. - [ ] Style HomeReviews component using CSS - []()
1. - [ ] Create ProductDetailPage logic - []()
1. - [ ] Style ProductDetailPage using CSS - []()
1. - [ ] Create ProductInfo component logic - []()
1. - [ ] Style ProductInfo component using CSS - []()
1. - [ ] Create ProductTabs component logic - []()
1. - [ ] Style ProductTabs component using CSS - []()
1. - [ ] Create ProductDetails component logic - []()
1. - [ ] Style ProductDetails component using CSS - []()
1. - [ ] Create ProductReviews component logic - []()
1. - [ ] Style ProductReviews component using CSS - []()
1. - [ ] Create FAQs component logic - []()
1. - [ ] Style FAQs component using CSS - []()
1. - [ :clock5: ] Create SimilarProducts component logic - [Alex](https://github.com/aleksandramuraveva)
1. - [ ] Style SimilarProducts component using CSS - []()
1. - [ ] Create Catalog page logic - []()
1. - [ ] Style Catalog page using CSS - []()
1. - [ :clock5: ] Create CatalogList component logic - [Alex](https://github.com/aleksandramuraveva)
1. - [ ] Style CatalogList component using CSS - []()
1. - [ ] Create Pagination component logic - []()
1. - [ ] Style Pagination component using CSS - []()
1. - [ ] Create Filters component logic - []()
1. - [ ] Style Filters component using CSS - []()
1. - [ ] Create CartPage logic - []()
1. - [ ] Style CartPage using CSS - []()
1. - [ ] Create CartList component logic - []()
1. - [ ] Style CartList component using CSS - []()
1. - [ ] Create CartItem component logic - []()
1. - [ ] Style CartItem component using CSS - []()
1. - [ ] Create OrderSummary component logic - []()
1. - [ ] Style OrderSummary component using CSS - []()
1. - [ ] Create CheckoutButton component logic - []()
1. - [ ] Style CheckoutButton component using CSS - []()
1. - [ ] Set up routing in routes directory - []()
1. - [ ] Define TypeScript types in types.ts - []()
1. - [ ] Create App component logic
1. - [ ] Style App component using CSS
1. - [ ] Style index.css
1. - [ ] Refactor all components making them responsive if necessary
1. - [ ] Write unit tests for components
1. - [ ] Optimize performance and improve accessibility




## Aproximate structure
structure might be different

```plaintext
src
├── assets/
│   └── images/
├── components/ #HERE components that we have on many pages!
│   ├── SignupPopup/
│   │   ├── SignupPopup.tsx
│   │   └── SignupPopup.css
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.css
│   ├── Section/
│   │   ├── Section.tsx
│   │   └── Section.css
│   ├── CardGrid/
│   │   ├── CardGrid.tsx
│   │   └── CardGrid.css
│   ├── Card/
│   │   ├── Card.tsx
│   │   └── Card.css
│   ├── ReviewCard/
│   │   ├── ReviewCard.tsx
│   │   └── ReviewCard.css
│   ├── NewsletterSubscription/
│   │   ├── NewsletterSubscription.tsx
│   │   └── NewsletterSubscription.css
│   └── Footer/
│       ├── Footer.tsx
│       └── Footer.css
├── contexts/
│   ├── ThemeContext.tsx
│   └── ThemeProvider.tsx
├── pages/
│   ├── Home/
│   │   ├── Home.tsx
│   │   ├── Home.css
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.css
│   │   ├── NewArrivals/
│   │   │   ├── NewArrivals.tsx
│   │   │   └── NewArrivals.css
│   │   ├── TopSelling/
│   │   │   ├── TopSelling.tsx
│   │   │   └── TopSelling.css
│   │   ├── BrowseByStyle/
│   │   │   ├── BrowseByStyle.tsx
│   │   │   └── BrowseByStyle.css
│   │   └── HomeReviews/
│   │       ├── HomeReviews.tsx
│   │       └── HomeReviews.css
│   ├── ProductDetailPage/
│   │   ├── ProductDetailPage.tsx
│   │   ├── ProductDetailPage.css
│   │   ├── ProductInfo/
│   │   │   ├── ProductInfo.tsx
│   │   │   └── ProductInfo.css
│   │   ├── ProductTabs/
│   │   │   ├── ProductTabs.tsx
│   │   │   ├── ProductTabs.css
│   │   │   ├── ProductDetails/
│   │   │   │   ├── ProductDetails.tsx
│   │   │   │   └── ProductDetails.css
│   │   │   ├── ProductReviews/
│   │   │   │   ├── ProductReviews.tsx
│   │   │   │   └── ProductReviews.css
│   │   │   └── FAQs/
│   │   │       ├── FAQs.tsx
│   │   │       └── FAQs.css
│   │   ├── SimilarProducts/
│   │   │   ├── SimilarProducts.tsx
│   │   │   └── SimilarProducts.css
│   │   └── ProductReviews/
│   │       ├── ProductReviews.tsx
│   │       └── ProductReviews.css
│   ├── Catalog/
│   │   ├── Catalog.tsx
│   │   ├── Catalog.css
│   │   ├── CatalogList
│   │   │   ├── CatalogList.tsx
│   │   │   ├── CatalogList.css
│   │   │   └── Pagination/ # 1-10 pages on the catalog page
│   │   │       ├── Pagination.tsx
│   │   │       └── Pagination.css
│   │   └── Filters/
│   │       ├── Filter.tsx
│   │       └── Filters.css
│   └── CartPage/
│       ├── CartPage.tsx
│       ├── CartPage.css
│       ├── CartList/
│       │   ├── CartList.tsx
│       │   ├── CartList.css
│       │   └── CartItem/
│       │       ├── CartItem.tsx
│       │       └── CartItem.css
│       └── OrderSummary/
│           ├── OrderSummary.tsx
│           ├── OrderSummary.css
│           └── CheckoutButton/
│               ├── CheckoutButton.tsx
│               └── CheckoutButton.css
├── routes/#router
│   └── ...
├── types/ # for Typescript types
│   └── types.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx

```

# How to work?
To work on a repository locally and manage pull requests, you'll need to clone the repository to your laptop and set up Git. Here are the steps to get you started:

### 1. **Install Git**
If you haven't already, you'll need to install Git on your laptop. You can download it from [git-scm.com](https://git-scm.com/).

### 2. **Clone the Repository**
Open your terminal or command prompt and navigate to the directory where you want to clone the repository. Then, use the following command to clone the repository:

```bash
git clone https://github.com/your-organization/your-repository.git
```

Replace `your-organization` and `your-repository` with the actual names of your organization and repository.

### 3. **Navigate to the Repository**
Change into the repository directory:

```bash
cd your-repository
```

### 4. **Create a New Branch**
It's a good practice to create a new branch for your work. You can create and switch to a new branch using the following command:

```bash
git checkout -b your-branch-name
```

Replace `your-branch-name` with a descriptive name for your branch.

### 5. **Make Changes and Commit**
Make your changes to the code. After making changes, you can add and commit them:

```bash
git add .
git commit -m "Your commit message"
```

### 6. **Push the Branch to GitHub**
Push your branch to GitHub:

```bash
git push origin your-branch-name
```

### 7. **Create a Pull Request**
Go to your repository on GitHub. You should see a prompt to create a pull request for your newly pushed branch. Click on it and follow the instructions to create the pull request.

### 8. **Review and Merge**
Once the pull request is created, you or your collaborators can review the changes. After the review, you can merge the pull request into the main branch.
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>









.
.
.
.
.
.
.
..
.
.
.
.
..

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
