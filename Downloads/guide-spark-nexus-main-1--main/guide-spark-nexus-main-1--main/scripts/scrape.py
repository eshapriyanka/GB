import json
from datetime import datetime

# Sample placeholder data – you can later replace this with scraped data
opportunities = [
    {
        "title": f"Microsoft Internship – Updated {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        "link": "https://careers.microsoft.com"
    },
    {
        "title": "Women Techmakers Scholarship",
        "link": "https://buildyourfuture.withgoogle.com/scholarships"
    },
    {
        "title": "Amazon SDE Intern 2025",
        "link": "https://amazon.jobs"
    }
]

# Save to public/opportunities.json
with open("public/opportunities.json", "w") as f:
    json.dump(opportunities, f, indent=2)
