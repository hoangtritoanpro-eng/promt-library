import { db } from './firebase';
import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  addDoc, 
  getDocs, 
  query, 
  where,
  serverTimestamp 
} from 'firebase/firestore';

/**
 * ─── LƯU TRỮ YÊU THÍCH (FAVORITES) ───
 */

// Lấy danh sách ID các prompt đã lưu của một user
export const getUserFavorites = async (userId) => {
  if (!userId) return [];
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().favorites || [];
    }
    return [];
  } catch (error) {
    console.error("Error fetching favorites", error);
    return [];
  }
};

// Cập nhật danh sách yêu thích của user
export const updateUserFavorites = async (userId, favoritesArray) => {
  if (!userId) return;
  try {
    const docRef = doc(db, 'users', userId);
    await setDoc(docRef, { favorites: favoritesArray }, { merge: true });
  } catch (error) {
    console.error("Error updating favorites", error);
    throw error;
  }
};


/**
 * ─── CỘNG ĐỒNG (COMMUNITY PROMPTS) ───
 */

// Đăng một prompt mới lên cộng đồng
export const submitCommunityPrompt = async (promptData, user) => {
  try {
    const communityRef = collection(db, 'community_prompts');
    const newPrompt = {
      ...promptData,
      authorId: user ? user.uid : 'anonymous',
      authorName: user ? user.displayName : 'Người ẩn danh',
      createdAt: serverTimestamp(),
      status: 'pending', // Cần duyệt trước khi hiển thị công khai
      likes: 0,
      saves: 0
    };
    const docRef = await addDoc(communityRef, newPrompt);
    return { id: docRef.id, ...newPrompt };
  } catch (error) {
    console.error("Error submitting community prompt", error);
    throw error;
  }
};

// Lấy danh sách các prompt đã được duyệt
export const getApprovedCommunityPrompts = async () => {
  try {
    const q = query(
      collection(db, 'community_prompts'), 
      where('status', '==', 'approved')
    );
    const querySnapshot = await getDocs(q);
    const prompts = [];
    querySnapshot.forEach((doc) => {
      prompts.push({ id: doc.id, ...doc.data() });
    });
    return prompts;
  } catch (error) {
    console.error("Error fetching community prompts", error);
    return [];
  }
};

// Lấy danh sách các prompt đang chờ duyệt (Admin)
export const getPendingCommunityPrompts = async () => {
  try {
    const q = query(
      collection(db, 'community_prompts'),
      where('status', '==', 'pending')
    );
    const querySnapshot = await getDocs(q);
    const prompts = [];
    querySnapshot.forEach((doc) => {
      prompts.push({ id: doc.id, ...doc.data() });
    });
    return prompts;
  } catch (error) {
    console.error("Error fetching pending prompts", error);
    return [];
  }
};

// Cập nhật trạng thái prompt (Duyệt/Từ chối)
export const updatePromptStatus = async (promptId, newStatus) => {
  try {
    const docRef = doc(db, 'community_prompts', promptId);
    await setDoc(docRef, { status: newStatus }, { merge: true });
  } catch (error) {
    console.error("Error updating prompt status", error);
    throw error;
  }
};


/**
 * ─── RATING & COMMENTS ───
 */

// Đăng bình luận & đánh giá
export const addComment = async (promptId, commentData, user) => {
  try {
    const commentsRef = collection(db, 'comments');
    const newComment = {
      promptId,
      ...commentData,
      userId: user ? user.uid : 'anonymous',
      userName: user ? user.displayName : 'Khách',
      createdAt: serverTimestamp(),
    };
    const docRef = await addDoc(commentsRef, newComment);
    return { id: docRef.id, ...newComment };
  } catch (error) {
    console.error("Error adding comment", error);
    throw error;
  }
};

// Lấy danh sách bình luận của 1 prompt
export const getComments = async (promptId) => {
  try {
    const q = query(
      collection(db, 'comments'),
      where('promptId', '==', promptId)
    );
    const querySnapshot = await getDocs(q);
    const comments = [];
    querySnapshot.forEach((doc) => {
      comments.push({ id: doc.id, ...doc.data() });
    });
    // Sort bằng JS tạm thời vì serverTimestamp() có thể null khi đang cache, hoặc cần tạo index nếu sort bằng firestore orderBy
    return comments.sort((a, b) => {
      const timeA = a.createdAt?.toMillis() || Date.now();
      const timeB = b.createdAt?.toMillis() || Date.now();
      return timeB - timeA; // Mới nhất lên đầu
    });
  } catch (error) {
    console.error("Error fetching comments", error);
    return [];
  }
};
