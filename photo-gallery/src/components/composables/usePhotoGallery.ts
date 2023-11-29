import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

const photos = ref<UserPhoto[]>([]);

export const usePhotoGallery = () => {
    const takePhoto = async () => {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });
      const fileName = Date.now() + '.jpeg';
      const savedFileImage = {
        filepath: fileName,
         webviewPath: photo.webPath,
};

photos.value = [savedFileImage, ...photos.value];
    };
export interface UserPhoto {
        filepath: string;
        webviewPath?: string;
      }
  
    <script setup lang="ts">
import {
  IonContent,
  IonCol,
  IonFab,
  IonFabButton,
  IonGrid,
  IonPage,
  IonHeader,
  IonIcon,
  IonImg,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery } from '@/composables/usePhotoGallery';

const { photos, takePhoto } = usePhotoGallery();

</script>

return {
    photos,
    takePhoto,
  };
  };
  
  