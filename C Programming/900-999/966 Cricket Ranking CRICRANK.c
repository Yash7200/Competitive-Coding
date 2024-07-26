//r --> runs
//w --> wickets
//c --> catches

//we need to compare and check for all 3 fields
#include <stdio.h>
int main()
{
    int t;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        int r1,r2,w1,w2,c1,c2,a=0,b=0;
        scanf("%d %d %d",&r1,&w1,&c1);
        scanf("%d %d %d",&r2,&w2,&c2);
        if(r1>r2)
        {
            a++;
        }
        else
        {
            b++;
        }
        if(w1>w2)
        {
            a++;
        }
        else
        {
            b++;
        }
        if(c1>c2)
        {
            a++;
        }
        else
        {
            b++;
        }
        if(a>b)
        {
            printf("A\n");
        }
        else
        {
            printf("B\n");
        }
    }
    return 0;
}
