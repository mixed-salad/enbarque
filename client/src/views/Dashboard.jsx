import React from 'react';

import OnboardeeDashboard from './../components/onboardee/OnboardeeDashboard';
import ManagerDashboard from './../components/manager/ManagerDashboard';

function Dashboard({ user }) {
  return (
    <>
      {user.role.accessLevel === 10 && <ManagerDashboard user={user} />}
      {user.role.accessLevel === 1 && (
        <OnboardeeDashboard user={user} />
      )}
    </>
  );
}

export default Dashboard;
