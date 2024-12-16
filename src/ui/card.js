// src/components/ui/card.js
import React from 'react';

export const Card = ({ children }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="text-xl font-semibold">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h3 className="text-lg font-bold">{children}</h3>
);

export const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-500">{children}</p>
);

export const CardContent = ({ children }) => (
  <div className="mt-4">{children}</div>
);
