import { useState, useEffect } from "react";

function Settings() {

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const [notifications, setNotifications] = useState(
    localStorage.getItem("notifications") !== "false"
  );

  useEffect(() => {

    localStorage.setItem("darkMode", darkMode);

    if (darkMode) {

      document.body.classList.add("dark");

    } else {

      document.body.classList.remove("dark");

    }

  }, [darkMode]);

  useEffect(() => {

    localStorage.setItem(
      "notifications",
      notifications
    );

  }, [notifications]);

  return (

    <div className="page">

      <h1>Settings</h1>

      <label className="setting-item">

        <input

          type="checkbox"

          checked={notifications}

          onChange={() =>
            setNotifications(
              !notifications
            )
          }

        />

        Enable Notifications

      </label>

      <label className="setting-item">

        <input

          type="checkbox"

          checked={darkMode}

          onChange={() =>
            setDarkMode(
              !darkMode
            )
          }

        />

        Dark Mode

      </label>

    </div>

  );
}

export default Settings;