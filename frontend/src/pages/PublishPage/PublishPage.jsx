import React, { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import { FaNewspaper } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNewspaperStore } from "../../store/Newspaper";
import "./PublishPage.scss";

const PublishPage = () => {
  const { fetchNewspaper, newspapers } = useNewspaperStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      await fetchNewspaper();
      setLoading(false);
    };
    load();
  }, [fetchNewspaper]);

  return (
    <div className="publish-page">
      <div className="page-header">
        <FaNewspaper className="news-icon" />
        <div>
          <h1>Latest News</h1>
          <p className="subtitle">Stay updated with the newest articles</p>
        </div>
      </div>

      {loading && <p className="loading">Loading news...</p>}

      {!loading && newspapers.length > 0 && (
        <div className="post-grid">
          {newspapers.map((newspaper) => (
            <Post key={newspaper._id} newspaper={newspaper} />
          ))}
        </div>
      )}

      {!loading && newspapers.length === 0 && (
        <div className="empty-state">
          <h2>No news articles found</h2>
          <p>You can add your first article below.</p>
          <Link to="/create" className="create-btn">
            Create Article
          </Link>
        </div>
      )}
    </div>
  );
};

export default PublishPage;
