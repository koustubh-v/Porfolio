// src/components/ui/tabs.js
import React from 'react';

export const Tabs = ({ children, defaultValue }) => (
  <div className="tabs" defaultValue={defaultValue}>
    {children}
  </div>
);

export const TabsList = ({ children }) => (
  <div className="tabs-list">{children}</div>
);

export const TabsTrigger = ({ value, children }) => (
  <button className="tabs-trigger">{children}</button>
);

export const TabsContent = ({ value, children }) => (
  <div className="tabs-content">{children}</div>
);
