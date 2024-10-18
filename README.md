# Rule Engine with AST

This project is a **3-tier rule engine** that uses an **Abstract Syntax Tree (AST)** to create, combine, and evaluate user-defined rules based on attributes like age, department, salary, and experience. The rule engine allows dynamic rule creation and evaluation, providing a flexible way to determine user eligibility.

## Features

- **Create Rules**: Allows users to define rules using logical operations like `AND` and `OR` and conditions such as `age > 30`.
- **Combine Rules**: Multiple rules can be combined into a single AST for efficient evaluation.
- **Evaluate Rules**: User data can be evaluated against the defined rules to determine if they meet certain criteria.

## Example Rule

```plaintext
((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)


## API Endpoints
1. Create a Rule
POST /api/rules/create

This endpoint converts a rule string into an Abstract Syntax Tree (AST).
