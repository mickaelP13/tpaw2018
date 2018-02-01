lena=imread('lena512.bmp');
baboon=imread('Baboon.bmp');
lena=double(lena);
baboon=double(baboon);

imagesc(lena);%pas beaucoup d'operation
colormap(gray)
figure(2)
imagesc(baboon);colormap(gray)

%
lena_0=lena-mod(lena,2);
lena_1=lena_0+1;
figure(3)
imagesc(lena_0);
colormap(gray)

figure(4)
imagesc(lena_1);colormap(gray);

figure(5)
colormap(gray)
imagesc(lena)
subplot(1,3,1)
imagesc(lena_0)
subplot(1,3,2)
imagesc(lena_1);
subplot(1,3,3)

%%%
T=512*512;
mse = sum(sum((lena(:)-lena_0(:)).^2)) ;
psnr = 10*log10(T*(255^2)./mse)

mse = sum(sum((lena(:)-lena_1(:)).^2)) ;
psnr1 = 10*log10(T*(255^2)./mse)


baboon_0=baboon-mod(baboon,2);
baboon_1=baboon_0+1;
mse = sum(sum((baboon(:)-baboon_0(:)).^2)) ;
psnr2 = 10*log10(T*(255^2)./mse)

mse = sum(sum((baboon(:)-baboon_1(:)).^2)) ;
psnr3 = 10*log10(T*(255^2)./mse)

%%%
lenam=zeros(512,512);
lenam(1:256,1:256)=lena(1:256,1:256)-mod(lena(1:256,1:256),2);
lenam(257:512,1:256)=lena_1(257:512,1:256);
lenam(1:256,257:512)=lena_1(1:256,257:512);
lenam(257:512,257:512)=lena_0(257:512,257:512)
figure(6)
imagesc(lenam);colormap(gray);
figure(7)
imagesc(mod(lenam,2));colormap(gray);

%%
imwrite(lenam/255,'lenam.png','png');

imwrite(lenam/255,'lena99.jpg','jpg','Quality',99);

imwrite(lenam/255,'lena75.jpg','jpg','Quality',75);

%%
lena99=imread('lena99.jpg');
lena_lsb_99=double(lena99)
figure(8)
imagesc(mod(lena_lsb_99,2))

lena75=imread('lena75.jpg');
lena75=double(lena75)
figure(9)
imagesc(mod(lena75,2))

