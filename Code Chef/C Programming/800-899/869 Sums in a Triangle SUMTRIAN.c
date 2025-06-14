#include <stdio.h>
int main()
{
    int t,N;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&N);
        int a[N][N];
        for(int j=0;j<N;j++)
        {
            for(int k=0;k<=j;k++)
            {
                scanf("%d",&a[j][k]);
            }
        }
        for(int j=N-1;j>0;j--)
        {
            for(int k=0;k<=j;k++)
            {
                if(a[j][k]>a[j][k+1])
                {
                    a[j-1][k]+=a[j][k];
                }
                else
                {
                    a[j-1][k]+=a[j][k+1];
                }
            }
        }
        printf("%d\n",a[0][0]);
    }
    return 0;
}
