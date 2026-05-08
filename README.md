## Executive Summary

This repository demonstrates how core **classification and regression evaluation metrics** work by implementing them **from scratch** and validating the results against `scikit-learn`. Rather than treating metrics as black boxes, the notebooks break each one down mathematically and conceptually, showing how threshold choices, class imbalance, and error definitions directly affect model evaluation. The focus is practical understanding: knowing **what a metric measures, when it fails, and why one metric may be more appropriate than another depending on the business problem**.

# Evaluation Metrics — Classification & Regression (From Scratch)

This repo contains hands-on notebooks that implement **core evaluation metrics from scratch** and verify them against `sklearn.metrics`.

The goal is not just to *use* metrics, but to **understand exactly what they compute, why they differ, and when each one matters**.

---

## What’s in this repo

### 1️⃣ Classification Metrics

Implemented manually and cross-checked with scikit-learn:

- Confusion Matrix (TP, FP, FN, TN)
- Accuracy
- Recall (Sensitivity)
- Precision
- F1 Score
- ROC Curve
- ROC AUC

Key ideas covered:
- How thresholds change model behaviour
- Precision vs Recall trade-offs
- Why accuracy can be misleading on imbalanced data
- Why ROC/AUC is useful when no threshold is chosen yet

All metrics are:
- Written from scratch
- Verified with `assert` against sklearn outputs
- Explained in plain English inside the notebook

---

### 2️⃣ Regression Metrics

Implemented manually and verified against `sklearn.metrics` using the **wine-quality dataset**:

- MAE (Mean Absolute Error)
- MSE (Mean Squared Error)
- RMSE
- R² (Coefficient of Determination)

Key ideas covered:
- Error magnitude vs squared penalty
- Why RMSE is often more interpretable than MSE
- What R² actually measures (and why it can be negative)
- Edge cases (constant targets, floating-point safety)

All metrics:
- Implemented from first principles
- Compared numerically to sklearn
- Verified with `np.isclose` assertions

---

## Why this repo exists

This is **not** about memorizing formulas.

It’s about being able to:
- Explain metrics clearly in interviews
- Choose the *right* metric for a business problem
- Debug models when results look “too good”
- Understand trade-offs instead of blindly optimizing scores

If you can implement the metric yourself, you actually understand it.

---

## Tech stack

- Python 3.11
- NumPy
- Pandas
- scikit-learn
- Jupyter Notebooks

---

## Status

✔ Classification metrics complete  
✔ Regression metrics complete  
✔ Scratch implementations verified against sklearn  

This repo is a **reference + learning artifact**, not production code.

---

## Next possible extensions

- Precision–Recall curves
- Adjusted R²
- Cross-validated metrics
- Business-cost–weighted metrics
- Custom loss functions