import { Navigate, Outlet } from "react-router-dom";

// Giả lập thông tin user (thực tế lấy từ Redux/AuthContext)
const currentUser = {
    role: "customer", // Hoặc "admin", "partner"
};

const ProtectedRoute = ({ role }) => {
    if (!currentUser || currentUser.role !== role) {
        if (currentUser.role === "admin") return <Navigate to="/admin" replace />;
        if (currentUser.role === "partner") return <Navigate to="/partner" replace />;
        return <Navigate to="/customer" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
