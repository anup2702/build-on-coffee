// Random cartoon-style avatar generator
export const generateRandomAvatar = (userId) => {
  // Create a seed from the user ID to ensure consistent avatar for the same user
  const seed = userId ? userId.split('').reduce((a, b) => a + b.charCodeAt(0), 0) : Math.random() * 1000;
  
  // List of cartoon-style avatar services
  const avatarServices = [
    // DiceBear Avatars (free, no API key required)
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
    `https://api.dicebear.com/7.x/micah/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
    `https://api.dicebear.com/7.x/personas/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
    `https://api.dicebear.com/7.x/initials/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
    `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
    `https://api.dicebear.com/7.x/notionists/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
  ];
  
  // Select avatar service based on seed for consistency
  const avatarIndex = Math.floor(seed) % avatarServices.length;
  return avatarServices[avatarIndex];
};

// Generate avatar for a user (uses email if no ID provided)
export const getUserAvatar = (user) => {
  if (user?.user_metadata?.avatar_url) {
    return user.user_metadata.avatar_url;
  }
  
  // Use email as seed for consistency
  const seed = user?.email || user?.id || 'default';
  return generateRandomAvatar(seed);
};

// Generate initials for fallback
export const getUserInitials = (user) => {
  const name = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split('@')[0] || 'U';
  const words = name.split(' ');
  
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  
  return name.substring(0, 2).toUpperCase();
};

// Generate a color based on user ID for consistent theming
export const getUserColor = (userId) => {
  const colors = [
    'from-blue-400 to-indigo-500',
    'from-purple-400 to-pink-500', 
    'from-green-400 to-blue-500',
    'from-yellow-400 to-orange-500',
    'from-pink-400 to-rose-500',
    'from-indigo-400 to-purple-500',
    'from-cyan-400 to-blue-500',
    'from-emerald-400 to-teal-500',
  ];
  
  const seed = userId ? userId.split('').reduce((a, b) => a + b.charCodeAt(0), 0) : Math.random() * 1000;
  const colorIndex = Math.floor(seed) % colors.length;
  return colors[colorIndex];
};
