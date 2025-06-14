#include <stdio.h>
int main()
{
    int cases,a,b;
    scanf("%d",&cases);
    for (int i=0;i<cases;i++){
        scanf("%d %d",&a,&b);
        if(a<b){
            printf("FIRST\n");
        }
        else if(b<a){
            printf("SECOND\n");
        }
        if (a==b){
            printf("ANY\n");
        }
    }
    return 0;
}