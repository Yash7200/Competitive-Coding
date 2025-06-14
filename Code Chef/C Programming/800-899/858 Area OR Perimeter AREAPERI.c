#include <stdio.h>
int main()
{
    int L,B,Area,Peri;
    scanf("%d",&L);
    scanf("\n%d",&B);
    Area=L*B;
    Peri=2*(L+B);
    if(Area>Peri){
        printf("Area\n%d",Area);
    }
    else if(Area<Peri){
        printf("Peri\n%d",Peri);
    }
    else{
        printf("Eq\n%d",Peri);
    }
    return 0;
}
